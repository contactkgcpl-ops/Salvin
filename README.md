# React + Vite

## Cursor: Agentic SEO skill (project)

This repo vendors [Agentic-SEO-Skill](https://github.com/Bhanunamikaze/Agentic-SEO-Skill) as a git submodule at `.cursor/skills/agentic-seo`. Cursor loads it as a project skill for audits, schema, sitemaps, CWV, etc.

After clone: `git submodule update --init .cursor/skills/agentic-seo`

Optional Python deps for bundled scripts: `pip install -r requirements-seo-skill.txt` (see upstream README for Playwright).

**Home AI chat:** Floating widget on Home only. Backend `POST /api/chat` (Express) needs `OPENAI_API_KEY` in `backend/.env`. Vite dev proxies `/api` to port 5000.

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
