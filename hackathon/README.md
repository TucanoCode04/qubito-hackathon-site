# Qubito Hackathon 2026 website

Static website for the Qubito Hackathon (11–13 December 2026), served at
**https://qubito.polito.it/hackathon/** (English) and **/hackathon/it/** (Italian).

Built with [Astro](https://docs.astro.build). The output is plain HTML/CSS/JS, so it can be uploaded to the
PoliTo server over SFTP. Nothing runs on the server: the forms send their data to a Google Apps Script
(see `apps-script/`).

## Run it locally

Needs Node.js 22.23+ (check with `node -v`).

```bash
npm install        # once
npm run dev        # http://localhost:4321/hackathon/ , reloads on every change
npm run build      # writes the final site to dist/
npm run preview    # serves dist/ to check the build
```

## Where things are

| To change | Edit |
|---|---|
| Application form link, contact email, countdown, application deadline / open-closed | `src/config.ts` |
| Schedule | `src/data/schedule.ts` |
| Partners and logos | `src/data/partners.ts` + images in `public/logos/` |
| FAQ | `src/data/faq.ts` |
| Organising team | `src/data/team.ts` (photos in `public/team/`) |
| Section names / order (also the order on the Bloch sphere) | `src/data/sections.ts` |
| Text of each section | `src/components/<Section>.astro` |
| Privacy notice, code of conduct, practical info | `src/content/en/*.md` and `src/content/it/*.md` |
| Colours, layout | `src/styles/global.css` |
| Sphere, superposition text, forms behaviour | `src/scripts/home.js` |
| Link preview image | `public/og-image.png` (source: `../demos/og/og-image.html`) |

Every text exists in English and Italian side by side, e.g. `{ en: 'Apply', it: 'Candidati' }`.
Always fill both.

## Applications (Google Form)

Applications go through the team's Google Form on teamqubito@gmail.com
(`APPLICATION_FORM_URL` in `src/config.ts`). Every "Apply" button opens it in a new tab; at the deadline
the buttons switch to "Applications are closed" by themselves. The Form must also be closed by hand (or
scheduled) in Google Forms. Checklist for the Form: `GOOGLE-SETUP.md`.

Partner requests: the "Get in touch" button opens an email to teamqubito.

`apps-script/hackathon.gs` is a backup: a custom backend (applications and partner requests into a Sheet,
confirmation emails, spam protection) in case the team ever wants a form built into the site instead.

## Deploy

1. `npm run build`
2. Upload the **contents** of `dist/` into `/htdocs/hackathon/` on `webhosting.polito.it` (SFTP, with
   the team SSH key), using FileZilla or WinSCP **synchronize** so only changed files are sent.
3. Never touch anything outside `/htdocs/hackathon/` (it's the team site), and never delete
   `/htdocs/.well-known/`.
