import {paths,url,origin,Lang} from '@/lib/content';
export function GET(){return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">'+Object.keys(paths).filter(k=>!['house','apartment','loft'].includes(k)).flatMap(k=>(['fr','en'] as Lang[]).map(l=>`<url><loc>${origin+url(l,k)}</loc><xhtml:link rel="alternate" hreflang="fr" href="${origin+url('fr',k)}"/><xhtml:link rel="alternate" hreflang="en" href="${origin+url('en',k)}"/></url>`)).join('')+'</urlset>',{headers:{'Content-Type':'application/xml'}})}

export const dynamic='force-static';
