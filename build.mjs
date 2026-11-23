// @ts-check
import { readFileSync, writeFileSync } from 'node:fs';

const files = [
  'scripts/icons.js',
  'scripts/i18n.js',
  'scripts/data.js',
  'scripts/sections.js',
  'scripts/areas.js',
  'scripts/modals.js',
  'scripts/main.js',
];

const parts = files.map((file) => {
  const raw = readFileSync(file, 'utf8');
  return raw
    .replace(/^\s*import\s+[\s\S]*?from\s+['"][^'"]+['"];?\s*$/gm, '')
    .replace(/^\s*export\s+/gm, '');
});

const bundle = `// Generated from modular scripts/ (icons.js, data.js, sections.js, modals.js, main.js)\n(() => {\n'use strict';\n${parts.join('\n\n')}\n})();\n`;

writeFileSync('scripts/app.bundle.js', bundle, 'utf8');
console.log('Bundle gerado com sucesso: scripts/app.bundle.js (' + bundle.length + ' bytes)');
