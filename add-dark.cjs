const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = [
  [/text-black/g, 'text-black dark:text-white'],
  [/bg-black text-white/g, 'bg-black dark:bg-white text-white dark:text-black'],
  [/bg-white/g, 'bg-white dark:bg-slate-900'],
  [/text-gray-600/g, 'text-gray-600 dark:text-gray-300'],
  [/text-gray-500/g, 'text-gray-500 dark:text-gray-400'],
  [/text-gray-400/g, 'text-gray-400 dark:text-gray-500'],
  [/border-gray-200\/60/g, 'border-gray-200/60 dark:border-gray-800/60'],
  [/border-gray-100/g, 'border-gray-100 dark:border-gray-800'],
  [/bg-gray-300/g, 'bg-gray-300 dark:bg-gray-700'],
];

for (const file of files) {
  if (file === 'Navbar.tsx') continue; // Already handled
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  for (const [regex, replacement] of replacements) {
    content = content.replace(regex, replacement);
  }
  
  fs.writeFileSync(filePath, content);
}
console.log('Done');
