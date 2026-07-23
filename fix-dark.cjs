const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  if (file === 'Navbar.tsx') continue;
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  content = content.replace(/bg-black dark:bg-white dark:bg-slate-900 text-white dark:text-black dark:text-white/g, 'bg-black dark:bg-white text-white dark:text-black');
  content = content.replace(/bg-black dark:bg-white dark:bg-slate-900 text-white dark:text-black/g, 'bg-black dark:bg-white text-white dark:text-black');
  content = content.replace(/text-black dark:text-white dark:text-white/g, 'text-black dark:text-white');
  content = content.replace(/text-gray-500 dark:text-gray-400 dark:text-gray-500/g, 'text-gray-500 dark:text-gray-400');
  content = content.replace(/text-gray-600 dark:text-gray-300 dark:text-gray-300/g, 'text-gray-600 dark:text-gray-300');
  content = content.replace(/text-gray-400 dark:text-gray-500 dark:text-gray-400/g, 'text-gray-400 dark:text-gray-500');
  
  fs.writeFileSync(filePath, content);
}
console.log('Fixed');
