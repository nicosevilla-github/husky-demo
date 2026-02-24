# Husky + Vue Demo

Reference project showing how to wire Husky for Vue projects so commits automatically run linters and formatters.
For project history and notable updates, see `CHANGELOG.md`.
When you update this demo, add a corresponding entry to `CHANGELOG.md`.

## What this demo includes

- Vue 3 + Vite scaffold.
- ESLint for JS/TS/Vue files.
- Stylelint for CSS/SCSS/Vue style blocks.
- Prettier for consistent formatting.
- Vite SCSS configured with the modern Sass API (avoids `legacy-js-api` deprecation warnings).
- Husky hooks:
  - `pre-commit` runs `lint-staged` on staged files only.
  - `pre-push` runs full checks (`lint`, `stylelint`, `format:check`).
- An SCSS demo file at `src/styles/manual-format-demo.scss` you can intentionally mess up and reformat during demos.
- TypeScript-ready setup (`src/main.ts`, `tsconfig.json`, `src/env.d.ts`).

## Install and run

Requires Node `^20.19.0` or newer (Vite 7 requirement).
This repo pins runtime tooling with Volta (`node@20.20.0`, `npm@11.6.2`) via `package.json`.

If Volta is installed, versions are selected automatically in this project.

```bash
npm install
npm run prepare
npm run dev
```

`npm run prepare` installs Husky and points Git hooks to `.husky/`.

## Commands you can demo

```bash
# Full checks
npm run lint
npm run stylelint
npm run format:check

# Auto-fix commands
npm run lint:fix
npm run stylelint:fix
npm run format

# Manual style-only formatting
npm run format:styles

# Manual single-file formatting (CSS/SCSS/etc.)
npm run format:file -- src/styles/manual-format-demo.scss
```

Lint coverage includes `*.js` and `*.ts` (plus Vue SFC scripts).

## Standardized formatting rules

- Prettier settings live in `.prettierrc.json` (100-char width, semicolons, single quotes, trailing commas, LF endings).
- Stylelint settings live in `.stylelintrc.cjs` (Vue + SCSS support, modern color notation, no `!important`, practical nested-selector handling).

## CI (GitHub Actions)

This repo includes a CI workflow at `.github/workflows/ci.yml` that runs on push and pull requests.

Checks executed in CI:

- `npm run lint`
- `npm run stylelint`
- `npm run format:check`
- `npm run build`

## Suggested demo flow for other developers

1. Edit `src/styles/manual-format-demo.scss` and make it messy.
2. Run:

```bash
npm run format:file -- src/styles/manual-format-demo.scss
```

3. Show `git diff` to confirm only style formatting changed.
4. Stage files with `git add`.
5. Commit:

```bash
git commit -m "demo: show husky pre-commit checks"
```

6. Explain that Husky runs `lint-staged` and only checks staged files.

## How to copy this into an existing Vue project

1. Install tools:

```bash
npm i -D husky lint-staged eslint eslint-plugin-vue vue-eslint-parser @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin typescript globals prettier stylelint stylelint-config-standard-scss postcss-html sass
```

2. Add scripts in `package.json`:
   - `prepare: "husky"`
   - `lint`, `lint:fix`, `stylelint`, `stylelint:fix`, `format`, `format:check` (with `.js` + `.ts` extensions in lint scripts)
3. Add `lint-staged` config in `package.json`.
4. Add `.husky/pre-commit` with `npx lint-staged`.
5. Add `.husky/pre-push` with full project checks.
6. Run once:

```bash
npm run prepare
chmod +x .husky/pre-commit .husky/pre-push
```

## Hook files

- `.husky/pre-commit`
- `.husky/pre-push`

If hooks do not trigger, run:

```bash
git config core.hooksPath
```

Expected output:

```text
.husky
```

## Troubleshooting

### Fork or GUI Git client fails with Node dylib / PATH errors

If a GUI client does not load your shell profile, Husky may resolve a broken system Node binary.
This project’s hooks prepend Volta automatically when available.

Verify what Node is being used:

```bash
node -v
which node
```

### Temporarily bypass hooks (emergency only)

```bash
git commit --no-verify
git push --no-verify
```

Use this only when blocked and run quality checks manually before opening a PR:

```bash
npm run lint
npm run stylelint
npm run format:check
npm run build
```
