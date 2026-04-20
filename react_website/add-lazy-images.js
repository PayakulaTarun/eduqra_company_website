import fs from 'fs';
import path from 'path';

function addLazyLoading(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      addLazyLoading(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Skip files where LCP might be affected (like Hero, Navbar)
      if (file === 'Hero.jsx' || file === 'Navbar.jsx' || file === 'LaunchPopup.jsx') {
        continue;
      }

      // Add loading="lazy" to <img> if not present
      if (content.includes('<img') && !content.includes('loading="lazy"')) {
        content = content.replace(/<(img\s+(?!.*?loading=)[^>]+)>/g, '<$1 loading="lazy">');
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

addLazyLoading('./src');
console.log('Lazy loading added to images');
