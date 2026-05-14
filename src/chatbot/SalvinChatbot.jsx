import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaPaperPlane, FaRobot, FaSearch, FaTimes } from "react-icons/fa";
import { sendChatMessages } from "./chatApi";
import "./chatbot.css";

const WELCOME =
  "Hi, I am Salvin assistant. Ask about company details, services, machines, contact, founder, turnkey plants, or support.";

const CONTACT_LINES = [
  "Phone/WhatsApp: +91 90239 79663",
  "Email: info.salvinindustries@gmail.com",
  "Managing Director: Keval Gandhi (md.salvinindustries@gmail.com)",
];

const COMPANY_INFO = {
  company:
    "Salvin Industries is an Ahmedabad, Gujarat based engineering company for turnkey automation, packaging machinery, processing plants, consultancy, spares, and service.",
  founder:
    "Er. Keval Gandhi is the Founder and Managing Director of Salvin Industries. He established Salvin Industries and has led the company since 2008.",
  services:
    "Core services include turnkey projects, machineries, food and pharma consultancy, automation and robotics, supply chain support, maintenance and AMC, contract packaging, pneumatic equipment, food processing, spices, pharmaceutical, chemical/API, agriculture, cosmetics, and export-industry solutions.",
  support:
    "Salvin supports installed systems with maintenance, AMC, troubleshooting, spares guidance, and engineering support. For urgent help, call or WhatsApp +91 90239 79663.",
};

const QUICK_PROMPTS = [
  "Company detail",
  "Services",
  "Contact",
  "Founder",
  "Search machineries",
];

function normalizeText(value) {
  return String(value || "").toLowerCase();
}

function machineSummary(machine) {
  const parts = [
    machine.machine_name,
    machine.category_id && `Category: ${machine.category_id}`,
    machine.subcategory && `Subcategory: ${machine.subcategory}`,
    machine.description,
  ].filter(Boolean);
  return parts.join("\n");
}

function getLocalReply(text, machines = []) {
  const query = normalizeText(text);
  const wantsContact = /\b(contact|phone|mobile|whatsapp|email|call|address|reach)\b/.test(query);
  const wantsFounder = /\b(founder|owner|md|managing director|keval|director)\b/.test(query);
  const wantsServices = /\b(service|solution|what do you do|turnkey|consult|automation|support|amc|spares|packaging)\b/.test(query);
  const wantsCompany = /\b(company|about|detail|profile|salvin|who are you)\b/.test(query);
  const wantsMachine = /\b(machine|machinery|equipment|catalog|plant|processing|packaging|pouch|chilli|honey|spices)\b/.test(query);

  if (wantsContact) {
    return `Here are Salvin contact details:\n${CONTACT_LINES.join("\n")}\n\nYou can also open the Contact page for inquiry form and department-wise contacts.`;
  }

  if (wantsFounder) {
    return COMPANY_INFO.founder;
  }

  if (wantsServices) {
    return COMPANY_INFO.services;
  }

  if (wantsCompany) {
    return COMPANY_INFO.company;
  }

  if (query.includes("support") || query.includes("maintenance") || query.includes("amc")) {
    return COMPANY_INFO.support;
  }

  if (wantsMachine) {
    const searchWords = query
      .split(/[^a-z0-9]+/)
      .filter((word) => word.length > 2 && !["machine", "machinery", "plant", "search", "show"].includes(word));
    const matches = machines
      .filter((machine) => {
        const haystack = normalizeText(
          [
            machine.machine_name,
            machine.description,
            machine.category_id,
            machine.subcategory,
            machine.meta_title,
            machine.meta_description,
            Array.isArray(machine.tags) ? machine.tags.join(" ") : "",
          ].join(" ")
        );
        return searchWords.length ? searchWords.some((word) => haystack.includes(word)) : true;
      })
      .slice(0, 4);

    if (matches.length) {
      return `I found these machinery matches:\n\n${matches
        .map((machine, index) => `${index + 1}. ${machineSummary(machine)}`)
        .join("\n\n")}\n\nFor exact specs and quote, open Machineries or Contact.`;
    }

    return "I can search Salvin machinery by name, category, or process. Try words like packaging, pouch, spices, honey, chilli, or processing. For exact quote, use Contact.";
  }

  return "";
}

function SalvinChatbot({ machines = [] }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([{ role: "assistant", content: WELCOME }]);
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

  async function submitMessage(value) {
    const text = value.trim();
    if (!text || loading) return;
    setInput("");
    const nextThread = [...messages, { role: "user", content: text }];
    setMessages(nextThread);

    const localReply = getLocalReply(text, machines);
    if (localReply) {
      setMessages((prev) => [...prev, { role: "assistant", content: localReply }]);
      return;
    }

    setLoading(true);
    const apiMessages = nextThread.filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        !m.isError &&
        String(m.content || "").trim()
    );
    const result = await sendChatMessages(apiMessages);
    setLoading(false);
    if (result.reply) {
      setMessages((prev) => [...prev, { role: "assistant", content: result.reply }]);
    } else {
      const hint =
        result.error === "service_unconfigured"
          ? `${result.message || "AI not configured."} `
          : result.message || "Something went wrong.";
      setMessages((prev) => [
        ...prev,
        {
          isError: true,
          errorText: hint,
        },
      ]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await submitMessage(input);
  }

  function handleQuickPrompt(text) {
    if (loading) return;
    submitMessage(text);
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
              <span>Search company, services, contact &amp; machines</span>
            </div>
            <button type="button" className="salvin-chat-close" onClick={() => setOpen(false)} aria-label="Close chat">
              <FaTimes size={14} aria-hidden />
            </button>
          </div>
          <div className="salvin-chat-tools" aria-label="Suggested questions">
            {QUICK_PROMPTS.map((prompt) => (
              <button key={prompt} type="button" onClick={() => handleQuickPrompt(prompt)}>
                <FaSearch size={10} aria-hidden />
                {prompt}
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
