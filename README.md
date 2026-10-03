# Samia Bourimech Immobilier

French-first, bilingual real-estate consultant website for Samia Bourimech in Villepinte, France.

## Development and deployment

- Node.js 24: `npm ci`, then `npm run dev`.
- Static production export: `npm run build` generates `out/`.
- Pushing to `main` builds and deploys through GitHub Actions to GitHub Pages.
- Project base path: `/samia-bourimech-immobilier`.
- Source content and routes: `lib/content.ts` and `app/[lang]/[[...slug]]/page.tsx`.

## Launch status

This is a public demonstration. Listings and prices are labelled illustrative. Reviews and portrait are placeholders. Contact details and legal identity need the consultant's approval before a business launch. The GitHub Pages forms do not transmit or store personal data; connect an approved form backend before activating submission. No analytics are enabled.

The separate ChatGPT-hosted version retains its own database-backed forms; this repository does not expose or access that database.

## Photography

Illustrative interior/home photos by Vincent Rivaud, Max Vakhtbovych, Ansar Muhammad, via Pexels, under https://www.pexels.com/license/.

Villepinte photo: Chabe01, https://commons.wikimedia.org/wiki/File:Mairie_Annexe_Villepinte_Seine_St_Denis_1.jpg, CC BY-SA 4.0 https://creativecommons.org/licenses/by-sa/4.0/. Cropped/resized versions remain under this license. Attribution is displayed with the image.
