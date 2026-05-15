const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

/**
 * @param {{ role: string; content: string }[]} messages
 * @returns {Promise<{ reply?: string; error?: string; message?: string }>}
 */
export async function sendChatMessages(messages) {
  const res = await fetch(`${API_BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    return { error: "bad_response", message: "Server returned non-JSON." };
  }
  if (!res.ok) {
    return {
      error: data?.error || "request_failed",
      message: data?.message || data?.error || res.statusText || "Chat request failed.",
    };
  }
  if (typeof data?.reply === "string") return { reply: data.reply };
  return { error: "no_reply", message: "Unexpected response from server." };
}

export async function fetchLiveMachines() {
  const res = await fetch(`${API_BASE}/api/machines`);
  if (!res.ok) {
    throw new Error("Machine database not available.");
  }
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}
