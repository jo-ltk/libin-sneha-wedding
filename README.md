# Libin & Sneha — Wedding Website

A mobile-first wedding website for **Libin Benny** and **Sneha Johnson**.

The site is a new, independent project with its own visual identity: hill-and-shore colour fields, editorial typography, and cinematic motion. It is not a restyle of another wedding template.

## Run locally

```bash
cd libin-sneha-wedding
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

When deploying, set `NEXT_PUBLIC_SITE_URL` to the live site URL so Open Graph images resolve correctly.

## Build

```bash
npm run build
npm start
```

## What’s included

- Opening curtain animation
- Split hero for Libin (Idukki) and Sneha (Kannur)
- Invitation
- Parent and family details
- Marian Center map link
- Click-to-call contact
- Mobile bottom navigation

## Client details used

Only information provided for this client is shown. No wedding date, ceremony time, or extra events were invented.

To add a date, photos, or ceremony details later, update `lib/content.ts` and the relevant section components in `components/site`.
