# AI Spec2UI

## Description
This skill automates:
- Parsing Figma tokens JSON
- Generating JS/CSS token files
- Generating AI rules (design-system.md)
- Using AI (Codex) to generate UI components
- Checking token compliance
- Creating Storybook preview

## Input
- design-tokens.tokens.json (from Figma)

## Steps
1. Flatten token JSON
2. Generate:
   - tokens.js
   - tokens.css
   - rules/design-system.md
3. Call Codex AI to generate UI components using tokens + rules
4. Run token check script
5. Generate Storybook configuration to preview components

## Output
- tokens/ → JS/CSS files
- rules/ → AI rules file
- generated-ui/ → AI generated components
- storybook/ → preview setup