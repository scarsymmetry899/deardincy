# Dear Dincy

A handmade, interactive apology-letter experience built as a small personal website.

The goal is to make the recipient feel like she is opening a real handmade card rather than reading a normal webpage. The project combines a sealed-envelope interaction, handwritten letter styling, a page-turn reveal, collectible stamp-like memories, subtle personal references, and a final signed thank-you note.

## Live experience

Production is deployed on Vercel from this repository.

Primary production alias:

`https://deardincy-abhitejachn-8733s-projects.vercel.app`

## Core creative prompt

Create a warm, handmade greeting-card experience inspired by an illustrated paper card: warm ivory textured paper, deep faded cobalt outer border, burgundy stitched/dashed inner details, muted yellow note paper, hand-drawn doodles, handwritten navy/burgundy typography, imperfect paper edges, tiny flowers, arrows, and annotations.

The experience should feel intentionally handmade rather than polished like a conventional app. It should work beautifully on mobile and desktop, with the envelope as the landing-page focal point and the handwritten note as the emotional focal point after opening.

Important design principles:

- Preserve the sender's original apology wording rather than rewriting it into AI-sounding copy.
- Keep the main apology sincere and uncluttered.
- Use personal references only after the letter, as optional discoveries.
- Avoid a dashboard/card-grid aesthetic; everything should belong to the same paper-and-postage world.
- Use animation sparingly and make every motion serve the story.
- Mobile should have its own natural vertical flow rather than simply shrinking the desktop composition.

## Original apology copy

> Dear Dincy,
>
> Hope this letter finds you well. Over the last few days we shared a lot of laughs and fun vibe, however somethings which I have said may have not really felt pleasant. I really feel bad for what I said. I've been thinking about it a lot and its left a void in me. Honestly, it feels like a bad dream and your silence is killing me. I just wanted to apologise once again for my mistake. Words can be bitter sometimes and I didn't want it to be that way. Hope you forgive me :)
>
> Yours Truly,  
> Mr. Sun! :)

The wording is intentionally preserved as written.

## Current UX flow

### 1. Landing / sealed envelope

The opening screen uses a handmade framed composition with:

- `for Dincy`
- `hey…`
- `I left something here for you.`
- `open when you feel like it ♡`
- a clean sealed envelope with a sun wax seal
- a subtle sound toggle

The closed envelope intentionally does **not** expose visible text from the letter. Earlier versions showed a handwritten preview inside the envelope, which felt visually awkward and caused overlap. The current version keeps the envelope clean and sealed.

### 2. Envelope-opening animation

On click:

- the seal fades/compresses
- the flap opens
- the paper rises
- the landing view transitions away
- the main letter appears

The animation was simplified after testing so it does not collide with the headline or other landing content.

### 3. Main handwritten apology

The letter screen contains:

- `a little handwritten honesty`
- `Dear Dincy,`
- the full apology paragraph on muted yellow paper
- handwritten signature
- subtle flower details

The layout has been repeatedly reduced and re-spaced to prevent clipping on small laptop heights and mobile screens.

### 4. “Other side” transition

The old `fold the letter` CTA was replaced with:

**`there’s a little more on the other side →`**

The button includes:

- a tiny page-curl cue
- an animated arrow
- a page-turn transition

This tells the reader that the experience continues without immediately revealing the stamp concept.

### 5. Back of the letter / collectible stamps

After turning the letter over, the recipient sees:

- `on the back of the letter…`
- `a few tiny stamps for you`
- `little things that reminded me of you ♡`

The stamps are designed to feel like real handmade postage rather than plain UI cards:

- perforated/scalloped outer edges
- cream paper texture
- inner printed border
- tiny `25` postage mark
- consistent hand-drawn line-art icon system
- slight imperfect rotation
- soft paper shadow
- flip interaction

Only one stamp stays open at a time. Tapping a stamp flips it and reveals one personal one-liner on the reverse.

The first group is immediately visible; a `more little stamps ↓` control reveals the rest.

## Stamp collection

The current stamp topics and reveal copy are:

### That smile

`That smile of yours has a way of making everything around it feel a little lighter.`

### That laugh

`Your laugh is one of those things that is very easy to notice and very hard not to like.`

### 😂

`I’m convinced no conversation with you is officially complete until at least one 😂 shows up.`

### Coffee

`That coffee still stands, by the way — whenever it feels right.`

### Italian detour

`Italian food still feels like a very good combination of good food, good conversation and no rush.`

### For the foodie

`Good food clearly matters to you, and that could lead to a lot of very good discoveries.`

### Hidden places

`There is something very nice about preferring the little hidden places people usually walk past.`

### Style note

`You have that rare kind of style that looks effortless even when everything is clearly very well put together.`

### The glasses

`The glasses really do suit you — they somehow make the whole look even more you.`

### Virgo things

`The attention to little details and that quietly put-together energy does feel very Virgo.`

### Temple Run

`Somehow Temple Run has become one of those random little things that feels very you.`

### 5'10 energy

`Being 5'10 already gives you a bit of main-character entrance energy, whether you admit it or not.`

### Little explorer

`The best kind of travel is probably the kind that leaves you with one place nobody else thought to look for.`

### Bihar

`A little bit of Bihar somewhere in the story makes the whole picture feel more interesting.`

### Kajoo

`Kajoo is still one of those names that is impossible to hear without smiling a little.`

### Dincy Kajol

`Dincy Kajol has a very nice ring to it — soft, memorable, and very much its own thing.`

### Serious work

`Serious work, sharp mind, and somehow still enough room left for all the laughter.`

### Navy roots

`There is something quietly lovely about having Navy roots in the story.`

### Little things

`It’s funny how the smallest details are usually the ones that make someone the most interesting.`

## Final ending

After the stamp collection, the experience now ends with a dedicated handwritten thank-you card inspired by the earlier ending design:

- miniature sealed envelope
- sun wax seal
- `one last little note`
- `thank you for reading.`
- `Yours Truly,`
- `Mr. Sun! :)`
- small flower row

This restores the sense of emotional closure that existed before the stamp section was added.

## Responsive behavior

The experience is designed around the following viewport classes:

- mobile phones around 390–430 px wide
- tablets around 768 px wide
- laptops around 1366×768
- desktop around 1440×900 and 1920×1080

Responsive decisions include:

- natural vertical growth on mobile
- no fixed-height letter paper on phones
- smaller heading hierarchy on short laptop screens
- four-column stamps on large desktop
- three-column stamps on tablet
- two-column stamps on mobile
- touch-friendly stamp sizing
- reduced icon size and copy size on small screens

## Design evolution / notable changes

### Envelope

- Removed visible `Dear Dincy` text from inside the closed envelope.
- Removed the later `a little note inside…` treatment after it still felt visually awkward.
- Changed the closed envelope to a cleaner sealed object.
- Simplified opening animation to stop the emerging sheet from colliding with heading copy.

### Typography and composition

- Reduced oversized H1/H2 treatments.
- Increased safe margins from decorative borders.
- Reduced visual competition from side notes/doodles.
- Made the envelope the single landing-screen focal point.
- Made the yellow note the single letter-screen focal point.

### Letter

- Reduced paragraph font size and widened the readable text area.
- Removed desktop clipping and oversized yellow-note behavior.
- Added natural mobile height instead of forcing viewport-fit layout.

### Post-letter experience

- Replaced a generic closing screen with a back-of-letter discovery layer.
- Added collectible personal stamps.
- Replaced mixed emojis/default glyphs with one consistent hand-drawn SVG line-art family.
- Reworked plain rectangular cards into postage-stamp shapes.
- Added flip reveals and one-open-at-a-time behavior.
- Added expandable `more little stamps` section.
- Added the final thank-you/signature card after the stamp collection.

### Stability fixes

- Removed duplicate dynamic stylesheet injection.
- Moved `stamp-refinement.css` into normal HTML loading.
- Simplified startup enhancement logic.
- Added null-safe event setup.
- Changed initial programmatic scroll behavior to browser-safe `auto`.
- Kept animations progressively enhanced rather than making the base experience dependent on them.

## Sound

There is an optional sound toggle. When enabled, a lightweight generated paper-rustle effect is created with the Web Audio API. There are no external audio files.

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API
- Vercel static hosting
- GitHub source control

No framework and no build process are required.

## Repository structure

- `index.html` — experience structure and content
- `style.css` — base layout, envelope, letter, responsive rules
- `stamp-refinement.css` — page-turn, postage stamp styling, stamp interactions, final thank-you card
- `script.js` — envelope interaction, sound, page turn, stamp flips, expandable stamp collection, final closing-note installation
- `vercel.json` — Vercel configuration

## Design language

Core palette:

- warm ivory / cream paper
- deep faded cobalt
- burgundy red
- muted yellow note paper
- pale dusty blue details

Visual references:

- handmade greeting cards
- postage stamps
- scrapbook paper
- imperfect stitched/dashed borders
- hand-drawn doodles
- handwritten notes

The visual goal is intentionally **personal and imperfect**, not glossy or app-like.

## Accessibility / usability

- semantic buttons for all interactions
- ARIA labels on primary interactive elements
- `aria-hidden` management between experience states
- `prefers-reduced-motion` support
- large enough touch targets on mobile
- no interaction is dependent on sound

## Deployment notes

The site is deployed as a static Vercel project. If Vercel Deployment Protection is enabled for the project/account, disable authentication for the recipient-facing production deployment so the shared URL opens without a Vercel login.

## Project intent

The experience is intentionally structured in this emotional order:

**apology → space → warmth → personal little details → thank you**

The apology remains the main message. Everything after it is optional discovery — small, affectionate reminders rather than a list of facts.
