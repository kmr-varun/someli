We are building the Someli.ai landing page — a pixel-perfect Figma-to-code implementation in Next.js 16 / React 19 / TypeScript / Tailwind CSS v4.

Before doing anything else:
1. Read `CLAUDE.md` — this is the full project guide, design system, workflow rules, and anti-hallucination rules. Follow it exactly.
2. Read `PROGRESS.md` — this tracks every section's status, the component registry, downloaded assets, and exactly where we stopped last session.
3. Run: `ls components/ components/sections/ public/assets/ 2>/dev/null` — verify what actually exists on disk.

Then report back:
- What sections are done
- What is currently in progress (and where exactly it stopped)
- What is next
- Any mismatch between PROGRESS.md and what's actually on disk

Wait for me to say "continue" before doing any work.

Tools available:
- Figma MCP (`get_design_context`, `get_screenshot`) — always use before coding any section
- Chrome DevTools MCP (`take_screenshot`, `navigate_page`, `list_console_messages`, `evaluate_script`, `resize_page`) — use after every section to verify visually in the browser
