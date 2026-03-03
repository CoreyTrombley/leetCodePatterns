#!/usr/bin/env node
const path = require('path');
const { spawnSync } = require('child_process');
const fs = require('fs');

const root = path.join(__dirname, '..');
const problemPath = process.argv[2];

if (!problemPath) {
  console.error('Usage: npm run solve -- <pattern>/<problem>');
  console.error('Example: npm run solve -- twoPointers/moveZeros');
  console.error('\nRun "npm run list" to see all problems.');
  process.exit(1);
}

const indexPath = path.join(root, problemPath, 'index.ts');
if (!fs.existsSync(indexPath)) {
  console.error(`Not found: ${indexPath}`);
  console.error('Run "npm run list" to see available problems.');
  process.exit(1);
}

const result = spawnSync('npx', ['ts-node', '--transpile-only', indexPath], {
  stdio: 'inherit',
  cwd: root,
  shell: true,
});
process.exit(result.status ?? 1);
