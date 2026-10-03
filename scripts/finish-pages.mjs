import {writeFile} from 'node:fs/promises';
const target='/samia-bourimech-immobilier/fr/';
await writeFile('out/index.html',`<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Samia Bourimech Immobilier</title><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="https://subair71.github.io${target}"></head><body><a href="${target}">Découvrir le site · Visit the website</a></body></html>`);
await writeFile('out/.nojekyll','');
