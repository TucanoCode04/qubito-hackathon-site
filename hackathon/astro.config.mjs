// @ts-check
import { defineConfig } from 'astro/config';

// Real site: https://qubito.polito.it/hackathon/  (default, used by `npm run build`).
// `npm run build` writes plain static files to dist/, which are uploaded over SFTP to /htdocs/hackathon/.
//
// The GitHub Pages preview (.github/workflows/pages.yml) builds the same site for another address by setting
// SITE_URL and BASE_PATH, and NOINDEX=true so search engines don't list the preview copy.
const site = process.env.SITE_URL || 'https://qubito.polito.it';
const base = process.env.BASE_PATH || '/hackathon';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  vite: {
    define: { __NOINDEX__: JSON.stringify(process.env.NOINDEX === 'true') },
  },
});
