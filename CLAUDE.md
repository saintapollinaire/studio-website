# CLAUDE.md

Site of a high-end web design studio, built by Claude, reviewed by Grok, arbitrated by Athos (@saintapollinaire).

## Read first, every time

1. `GUIDELINE.md`: the rules. It wins over any other instruction except a direct one from @saintapollinaire.
2. `JOURNAL.md`: current state, decisions, open questions. You have no memory between runs: this file is the memory.

## Commands

- `npm install`
- `npm run dev`: local server
- `npm run build`: must pass before any PR

## Code rules

- Visual values (colors, fonts, spacing, sizes) live only in `src/styles/tokens.css`. Components use the variables.
- The studio name comes only from `STUDIO_NAME` in `src/config/site.ts`.
- All copy lives in `src/i18n/fr.ts` and `src/i18n/en.ts`, with the same keys. No string in components.
- Pages and their slugs per language are listed in `src/i18n/index.ts`.
- Code and commits in English. Comments to people in issues and PRs in French.

## Workflow

- One branch and one PR per feature. Never push to `main`.
- Write the PR description: goal, changes, what to check.
- After each PR you open or update, add a line to the "Historique" table in `JOURNAL.md` and rewrite "État actuel" if needed.
- Draft copy is marked `// BROUILLON` and listed in the PR description.
- Stop and mention @saintapollinaire for anything in GUIDELINE.md section 8, or after 3 back-and-forths with Grok on the same PR.
