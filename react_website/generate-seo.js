import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { blogs } from './src/data/blogs.js';

const siteUrl = 'https://eduqra.com';

const routes = [
  '/',
  '/about',
  '/ai-solutions',
  '/products',
  '/blog',
  '/contact',
  '/login',
  '/join',
  ...blogs.map(blog => `/blog/${blog.slug}`)
];

function generateSitemap() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap);
  console.log('✅ Sitemap generated successfully.');
}

function generateRobotsTxt() {
  const robotsTxt = `User-agent: *
Allow: /
Disallow: /admin
Disallow: /profile
Disallow: /private/

Sitemap: ${siteUrl}/sitemap.xml`;

  fs.writeFileSync(path.join(__dirname, 'public', 'robots.txt'), robotsTxt);
  fs.writeFileSync(path.join(__dirname, 'dist', 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated successfully.');
}

try {
  // Try to create dist directory if it doesn't exist
  if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true });
  }
  generateSitemap();
  generateRobotsTxt();
} catch (error) {
  console.error('Error generating SEO files:', error);
}
