#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

const root = path.join(__dirname, '..');
const patterns = ['twoPointers', 'prefixSum'];

console.log('Available problems (run with: npm run solve -- <path>)\n');

for (const pattern of patterns) {
  const patternDir = path.join(root, pattern);
  if (!fs.existsSync(patternDir) || !fs.statSync(patternDir).isDirectory()) continue;

  const entries = fs.readdirSync(patternDir, { withFileTypes: true });
  const problems = entries.filter((e) => e.isDirectory()).map((e) => e.name);

  if (problems.length === 0) continue;

  console.log(`${pattern}/`);
  for (const problem of problems) {
    const indexPath = path.join(patternDir, problem, 'index.ts');
    if (fs.existsSync(indexPath)) {
      console.log(`  ${pattern}/${problem}`);
    }
  }
  console.log('');
}
