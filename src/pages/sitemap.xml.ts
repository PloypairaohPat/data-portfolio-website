import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

const staticPaths = ['/', '/skills', '/about'];

export const GET: APIRoute = ({ site }) => {
  const origin = site ? site.href.replace(/\/$/, '') : '';
  const paths = [...staticPaths, ...projects.map((p) => `/projects/${p.slug}`)];
  const body = paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
