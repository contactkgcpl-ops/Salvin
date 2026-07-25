import React from "react";
import { renderToString } from "react-dom/server";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

// Polyfill minimal browser globals for Node SSR
if (typeof globalThis.window === "undefined") {
  globalThis.window = {
    scrollTo: () => {},
    location: { pathname: "/", href: "https://salvinindia.com/" },
    addEventListener: () => {},
    removeEventListener: () => {},
  };
}

if (typeof globalThis.document === "undefined") {
  globalThis.document = {
    title: "",
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {},
    createElement: () => ({ setAttribute: () => {}, appendChild: () => {} }),
    head: { appendChild: () => {} },
  };
}

if (typeof globalThis.localStorage === "undefined") {
  globalThis.localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
  };
}

export function render(url) {
  const html = renderToString(
    <MemoryRouter initialEntries={[url]}>
      <App />
    </MemoryRouter>
  );
  return html;
}
