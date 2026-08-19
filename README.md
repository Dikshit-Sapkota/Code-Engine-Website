# Code Engine — Next.js site

A redesign of the Code Engine landing page, built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS.

## Design direction

The studio's own language — "code," "deploy," "build success" — is treated as
real material instead of decoration. The site is styled as a blueprint /
schematic document: a dark ink background on a faint engineering grid, mono
type for labels and data, and a signature animated trace-diagram in the hero
(three build bars for Spring Boot, MERN, and WordPress) that reappears as
color-coded engine markers in the Stack section. Sections alternate between
the dark "blueprint" surface and a light "paper" surface to separate
narrative sections (hero, stack, about) from working sections (services,
process, contact).

- **Display type:** Space Grotesk
- **Labels / data / mono:** IBM Plex Mono
- **Body:** Inter
- **Accent colors:** signal blue `#5B8DEF` (primary), teal `#3FB88F` and amber
  `#E8A548` (used to color-code the MERN and WordPress engines)

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

```
app/
  layout.tsx        Fonts + metadata
  page.tsx           Assembles the sections
  globals.css        Blueprint/paper grid backgrounds, animations
  components/
    Header.tsx
    Hero.tsx         Signature animated trace diagram
    Services.tsx
    Stack.tsx
    Process.tsx
    About.tsx
    Contact.tsx      Client component — form is wired to local state only
    Footer.tsx
```

## Next steps

- Wire `Contact.tsx`'s form submit handler to an email service (Resend,
  Formspree, an API route, etc.) — it currently just flips a "sent" state.
- Swap in real project photos or client logos if you want to extend past a
  single-page layout.
- Deploy on Vercel, or `npm run build && npm run start` anywhere that runs
  Node.
