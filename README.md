# AI Spec2UI

## Usage
1. Put your Figma token JSON into `resources/template-token.json`.
2. Run `node scripts/build-tokens.js` → generates tokens.js, tokens.css, rules.md
3. Run `node scripts/generate-ui.js` → generates UI components
4. Run `node scripts/check-tokens.js` → validates token compliance
5. Run `node scripts/generate-storybook.js` → sets up Storybook preview