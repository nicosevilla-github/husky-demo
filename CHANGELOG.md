# Changelog

All notable changes to this Husky demo project are documented in this file.

## [Unreleased]

### Added

- GitHub Actions CI workflow at `.github/workflows/ci.yml` running:
  - `npm run lint`
  - `npm run stylelint`
  - `npm run format:check`
  - `npm run build`
- README troubleshooting section for GUI Git client PATH issues and emergency hook bypass commands.
- This changelog file for implementation awareness.

### Changed

- Standardized Prettier configuration in `.prettierrc.json` for explicit team-wide formatting defaults.
- Standardized Stylelint configuration in `.stylelintrc.cjs` for Vue + SCSS projects (modern color syntax, no `!important`, practical ignore rules).
- Added README guidance describing standardized Prettier and Stylelint settings.

## [2026-02-24]

### Added

- Initial Vue 3 + Vite Husky demo scaffold (`503cad1`).
- Husky hooks and `lint-staged` workflow for staged-file validation (`503cad1`).
- ESLint + Prettier + Stylelint setup for Vue/JS/TS/CSS/SCSS (`503cad1`).
- Manual SCSS formatting demo file and usage docs (`503cad1`).
- TypeScript support for source and linting (`503cad1` updates during scaffold cycle).

### Changed

- Migrated Vite SCSS processing to modern Sass API to remove legacy JS API warnings (`a662469`).
- Upgraded vulnerable dependencies and lockfile to resolve `npm audit` findings (0 vulnerabilities) (`08300a3`).
- Updated Husky hooks to prefer Volta Node path for GUI clients like Fork/Sourcetree (`05db895`).
- Added Volta runtime pinning and engine guidance in project docs/config (`c659443`).
