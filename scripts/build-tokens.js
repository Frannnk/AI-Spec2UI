const fs = require("fs");
const path = require("path");

const inputFile = path.join(__dirname, "../resources/template-token.json");
const jsFile = path.join(__dirname, "../tokens/tokens.js");
const cssFile = path.join(__dirname, "../tokens/tokens.css");
const mdFile = path.join(__dirname, "../rules/design-system.md");

// 读取 token
const raw = JSON.parse(fs.readFileSync(inputFile, "utf-8"));

// 扁平化 token
function flattenTokens(obj, prefix = "") {
  let result = {};
  for (const key in obj) {
    if (obj[key].value) {
      result[`${prefix}${key}`] = obj[key].value;
    } else {
      Object.assign(result, flattenTokens(obj[key], `${prefix}${key}-`));
    }
  }
  return result;
}

const flat = flattenTokens(raw);

// 输出 JS
if (!fs.existsSync(path.join(__dirname, "../tokens"))) fs.mkdirSync(path.join(__dirname, "../tokens"));
fs.writeFileSync(jsFile, `export const tokens = ${JSON.stringify(flat, null, 2)};\n`);

// 输出 CSS
let css = ":root {\n";
for (const key in flat) {
  css += `  --${key}: ${flat[key]};\n`;
}
css += "}";
fs.writeFileSync(cssFile, css);

// 输出 AI rules
if (!fs.existsSync(path.join(__dirname, "../rules"))) fs.mkdirSync(path.join(__dirname, "../rules"));
let md = `# AI STRICT DESIGN RULES\n\n`;
md += `You MUST follow these rules:\n1. Only use tokens listed below.\n2. Never hardcode px, rem, or hex values.\n3. If a value is not in token list, DO NOT create new value.\n\n## Token List\n`;
for (const key in flat) {
  md += `- ${key}: ${flat[key]}\n`;
}
fs.writeFileSync(mdFile, md);

console.log("✅ Build complete: tokens.js, tokens.css, rules/design-system.md");