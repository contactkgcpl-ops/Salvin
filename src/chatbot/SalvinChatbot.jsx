import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaPaperPlane, FaRobot, FaSearch, FaTimes } from "react-icons/fa";
import { fetchLiveMachines, trackChatbotEvent } from "./chatApi";
import "./chatbot.css";

const WELCOME =
  "Hi, I am Salvin assistant. What do you want to know?";

const CONTACT_LINES = [
  "Phone/WhatsApp: +91 90239 79663",
  "Email: info.salvinindustries@gmail.com",
  "Managing Director: Keval Gandhi (md.salvinindustries@gmail.com)",
];

const COMPANY_INFO = {
  company:
    "Salvin Industries is a turnkey automation and packaging machinery group headquartered in Ahmedabad, Gujarat. The company designs, manufactures, and deploys high-performance production lines for food, pharma, cosmetics, chemical/API, agriculture, and export industries.",
  founder:
    "Er. Keval Gandhi is the Founder and Managing Director of Salvin Industries. He established Salvin Industries and has led the company since 2008.",
  services:
    "Salvin services include turnkey projects, machineries, food and pharma consultancy, automation and robotics, supply chain support, maintenance and AMC, contract packaging, pneumatic equipment, processing lines, and export-industry solutions.",
  journey:
    "Salvin journey began with precision packaging machinery and expanded into automatic design, processing manufacturing, reactors and vessels, pharma consulting, GMP plant design, contract packaging, international turnkey projects, and Automation 4.0 smart-factory solutions.",
  support:
    "Salvin supports installed systems with maintenance, AMC, troubleshooting, spares guidance, and engineering support. For urgent help, call or WhatsApp +91 90239 79663.",
};

const QUICK_PROMPTS = [
  { id: "question_company", label: "Know about company" },
  { id: "question_service", label: "Our service" },
  { id: "question_journey", label: "Explore Our Journey" },
  { id: "question_machine", label: "Want machine" },
];

const SERVICE_OPTIONS = [
  { label: "Consultancy", to: "/contact" },
  { label: "Projects", to: "/turnkey-project#brochures" },
  { label: "Machines", value: "show-machine-subcategories" },
  { label: "Spares", href: "https://spares.salvinindia.com" },
];

const WELCOME_MESSAGE = {
  role: "assistant",
  content: WELCOME,
  actions: QUICK_PROMPTS.map((prompt) => ({ label: prompt.label, prompt })),
};

const WHATSAPP_URL =
  "https://wa.me/919023979663?text=Hello%20Salvin%20Industries%2C%20I%20want%20to%20ask%20about%20a%20machine.";

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function createSlug(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getMachineSlug(machine) {
  return machine?.slug?.trim() || createSlug(machine?.machine_name) || String(machine?.machine_id || machine?.id || "");
}

function getMachineAnalyticsId(machine) {
  return machine?.analytics_id || `machine_${machine?.machine_id || machine?.id || getMachineSlug(machine)}`;
}

function getSubcategoryName(value) {
  if (typeof value === "string") return value.trim();
  return String(value?.name || value?.subcategory || value?.subcategory_name || "").trim();
}

function getMachineSubcategories(machines = [], subcategories = []) {
  const names = new Set();
  subcategories.forEach((subcategory) => {
    const name = getSubcategoryName(subcategory);
    if (name) names.add(name);
  });
  machines.forEach((machine) => {
    const name = getSubcategoryName(machine.subcategory || machine.subcategory_name);
    if (name && machine.status !== "inactive") names.add(name);
  });
  return Array.from(names).sort((a, b) => a.localeCompare(b));
}

function getMachineHaystack(machine) {
  return normalizeText(
    [
      machine.machine_name,
      machine.description,
      machine.category_id,
      machine.category_name,
      machine.subcategory,
      machine.subcategory_name,
      machine.meta_title,
      machine.meta_description,
      Array.isArray(machine.tags) ? machine.tags.join(" ") : "",
    ].join(" ")
  );
}

function findMachineByName(text, machines = []) {
  const query = normalizeText(text).replace(/\b(machine|machinery|plant|want|need|show|search|find|available|do you have)\b/g, " ");
  const words = query
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length > 2);

  if (!words.length) return null;

  const scored = machines
    .filter((machine) => machine.status !== "inactive")
    .map((machine) => {
      const name = normalizeText(machine.machine_name);
      const haystack = getMachineHaystack(machine);
      let score = 0;
      if (name && query.trim() && name.includes(query.trim())) score += 12;
      if (query.trim() && haystack.includes(query.trim())) score += 8;
      score += words.reduce((total, word) => total + (name.includes(word) ? 3 : haystack.includes(word) ? 1 : 0), 0);
      return { machine, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored[0]?.machine || null;
}

function getLocalReply(text) {
  const query = normalizeText(text);
  const wantsContact = /\b(contact|phone|mobile|whatsapp|email|call|address|reach)\b/.test(query);
  const wantsFounder = /\b(founder|owner|md|managing director|keval|director)\b/.test(query);
  const wantsServices = /\b(service|solution|what do you do|turnkey|consult|automation|support|amc|spares|packaging)\b/.test(query);
  const wantsCompany = /\b(company|about|detail|profile|salvin|who are you)\b/.test(query);
  const wantsJourney = /\b(journey|history|milestone|started|since|growth|timeline)\b/.test(query);
  const wantsMachine = /\b(machine|machinery|equipment|catalog|plant|processing|packaging|pouch|chilli|honey|spices)\b/.test(query);

  if (wantsContact) {
    return {
      content: `Here are Salvin contact details:\n${CONTACT_LINES.join("\n")}\n\nYou can also open the Contact page for inquiry form and department-wise contacts.`,
      actions: [{ label: "Open Contact", to: "/contact" }],
    };
  }

  if (wantsFounder) {
    return { content: COMPANY_INFO.founder, actions: [{ label: "Open About", to: "/about" }] };
  }

  if (wantsServices) {
    return {
      content: "Select service:",
      actions: SERVICE_OPTIONS,
    };
  }

  if (wantsJourney) {
    return { content: COMPANY_INFO.journey, actions: [{ label: "Open Journey", to: "/about" }] };
  }

  if (wantsCompany) {
    return { content: COMPANY_INFO.company, actions: [{ label: "Open About", to: "/about" }] };
  }

  if (query.includes("support") || query.includes("maintenance") || query.includes("amc")) {
    return { content: COMPANY_INFO.support, actions: [{ label: "Open Services", to: "/services" }] };
  }

  if (wantsMachine) {
    return { content: "Which machine do you want?", mode: "machine-search" };
  }

  return null;
}

function SalvinChatbot({ machines = [], subcategories = [] }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("default");
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const listRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [open, messages, loading]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function addAssistantMessage(message) {
    setMessages((prev) => [...prev, { role: "assistant", ...message }]);
  }

  function handleNavigation(to) {
    setOpen(false);
    navigate(to);
  }

  function redirectToWhatsApp() {
    window.location.href = WHATSAPP_URL;
  }

  function showMachineSubcategories() {
    const names = getMachineSubcategories(machines, subcategories);
    if (!names.length) {
      addAssistantMessage({
        content: "Machine subcategories not loaded. Contact team on WhatsApp.",
        actions: [{ label: "Open WhatsApp", href: WHATSAPP_URL }],
      });
      return;
    }
    addAssistantMessage({
      content: "Select machine subcategory:",
      actions: names.map((name) => ({
        label: name,
        to: `/machineries?subcategory=${encodeURIComponent(name)}`,
      })),
    });
  }

  async function getMachineRows() {
    try {
      const liveMachines = await fetchLiveMachines();
      if (liveMachines.length) return liveMachines;
    } catch {
      // Fall back to already-loaded catalog data when API is unavailable.
    }
    return machines;
  }

  async function handleMachineSearch(text) {
    setLoading(true);
    const liveMachines = await getMachineRows();
    setLoading(false);

    const match = findMachineByName(text, liveMachines);
    if (match) {
      const to = `/machineries/${getMachineSlug(match)}`;
      trackChatbotEvent({
        event_type: "machine_search",
        target_id: getMachineAnalyticsId(match),
        label: match.machine_name,
      });
      addAssistantMessage({
        content: `Yes, ${match.machine_name} is available. Opening machine page now.`,
        actions: [{ label: "Open Machine", to }],
      });
      window.setTimeout(() => handleNavigation(to), 700);
      setMode("default");
      return;
    }

    addAssistantMessage({
      content: 'Machine not available. You want to connect via WhatsApp?',
      actions: [
        { label: "Yes, WhatsApp", href: WHATSAPP_URL },
        { label: "No, continue", value: "continue" },
      ],
    });
    setMode("whatsapp-confirm");
  }

  async function submitMessage(value) {
    const text = value.trim();
    if (!text || loading) return;
    setInput("");
    const nextThread = [...messages, { role: "user", content: text }];
    setMessages(nextThread);

    if (mode === "machine-search") {
      await handleMachineSearch(text);
      return;
    }

    if (mode === "whatsapp-confirm") {
      if (/^(yes|y|ok|sure|whatsapp|connect)/i.test(text)) {
        addAssistantMessage({ content: "Opening WhatsApp now." });
        redirectToWhatsApp();
        return;
      }
      addAssistantMessage({ content: "Okay. Continue asking about company, services, journey, or another machine." });
      setMode("default");
      return;
    }

    const localReply = getLocalReply(text);
    if (localReply) {
      setMode(localReply.mode || "default");
      addAssistantMessage(localReply);
      return;
    }

    addAssistantMessage({
      content: "This detail is not available in website data. Connecting you with Salvin team on WhatsApp.",
      actions: [{ label: "Open WhatsApp", href: WHATSAPP_URL }],
    });
    window.setTimeout(() => redirectToWhatsApp(), 900);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await submitMessage(input);
  }

  function handleQuickPrompt(text) {
    if (loading) return;
    const prompt = typeof text === "string" ? QUICK_PROMPTS.find((item) => item.label === text) : text;
    if (!prompt) return;
    trackChatbotEvent({
      event_type: "question_click",
      target_id: prompt.id,
      label: prompt.label,
    });
    submitMessage(prompt.label);
  }

  function handleMessageAction(action) {
    if (action.prompt) {
      trackChatbotEvent({
        event_type: "question_click",
        target_id: action.prompt.id,
        label: action.prompt.label,
      });
      submitMessage(action.prompt.label);
      return;
    }
    if (action.to) {
      handleNavigation(action.to);
      return;
    }
    if (action.href) {
      window.location.href = action.href;
      return;
    }
    if (action.value === "show-machine-subcategories") {
      showMachineSubcategories();
      return;
    }
    if (action.value === "continue") {
      setMode("default");
      addAssistantMessage({ content: "Okay. Continue with any question." });
    }
  }

  return (
    <div className="salvin-chat-root" aria-live="polite">
      {!open && (
        <button
          type="button"
          className="salvin-chat-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open Salvin assistant chat"
        >
          <span className="salvin-chat-pulse" aria-hidden />
          <FaRobot size={28} aria-hidden />
        </button>
      )}
      {open && (
        <div className="salvin-chat-panel" role="dialog" aria-labelledby="salvin-chat-title">
          <div className="salvin-chat-header">
            <div className="salvin-chat-avatar" aria-hidden>
              <FaRobot size={20} />
            </div>
            <div>
              <h2 id="salvin-chat-title">Salvin Assistant</h2>
              <span>Company, service, journey &amp; machines</span>
            </div>
            <button type="button" className="salvin-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <FaTimes size={14} aria-hidden />
            </button>
          </div>
          <div className="salvin-chat-tools" aria-label="Suggested questions">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt.id} type="button" onClick={() => handleQuickPrompt(prompt)}>
                <FaSearch size={10} aria-hidden />
                {prompt.label}
              </button>
            ))}
          </div>
          <div className="salvin-chat-messages" ref={listRef}>
            {messages.map((m, i) =>
              m.isError ? (
                <div key={i} className="salvin-chat-msg error" role="alert">
                  {m.errorText}
                  <div className="salvin-chat-error-link">
                    <NavLink to="/contact">Go to Contact</NavLink>
                  </div>
                </div>
              ) : (
                <div key={i} className={`salvin-chat-msg ${m.role}`}>
                  {m.content}
                  {!!m.actions?.length && (
                    <div className="salvin-chat-actions">
                      {m.actions.map((action) => (
                        <button key={action.label} type="button" onClick={() => handleMessageAction(action)}>
                          {action.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
            {loading && (
              <div className="salvin-chat-typing">
                <span />
                Thinking...
              </div>
            )}
          </div>
          <form className="salvin-chat-form" onSubmit={handleSubmit}>
            <textarea
              className="salvin-chat-input"
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search machines, services, founder..."
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              aria-label="Message"
            />
            <button type="submit" className="salvin-chat-send" disabled={loading || !input.trim()}>
              <FaPaperPlane size={13} aria-hidden />
              <span>Send</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SalvinChatbot;
