import {origin} from '@/lib/content';
export function GET(){return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: ${origin}/samia-bourimech-immobilier/sitemap.xml\n`,{headers:{'Content-Type':'text/plain'}})}

export const dynamic='force-static';
