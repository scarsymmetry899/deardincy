# Dear Dincy

A handmade interactive apology letter experience built as a small personal website.

The site is designed to feel like opening a real handmade card rather than reading a conventional webpage. It combines a sealed envelope, a handwritten apology, a page turn interaction, a collection of personal postage stamps, and a final signed thank you note.

## Repository description

Suggested GitHub repository description:

`A handmade interactive apology letter with an animated envelope, handwritten note, personal collectible stamps, and a final signed thank you.`

## Live experience

Production alias:

`https://deardincy-abhitejachn-8733s-projects.vercel.app`

Latest verified production deployment:

`https://deardincy-2ax1lmwc2-abhitejachn-8733s-projects.vercel.app`

## Creative direction

The visual language is inspired by handmade greeting cards and postage: warm ivory paper, deep faded cobalt borders, burgundy stitched details, muted yellow letter paper, imperfect paper edges, tiny flowers, handwritten navy and burgundy typography, and subtle paper texture.

The apology remains the emotional focus. Personal details appear only after the letter as optional discoveries.

## Main apology

> Dear Dincy,
>
> Hope this letter finds you well. Over the last few days we shared a lot of laughs and fun vibe, however somethings which I have said may have not really felt pleasant. I really feel bad for what I said. I've been thinking about it a lot and its left a void in me. Honestly, it feels like a bad dream and your silence is killing me. I just wanted to apologise once again for my mistake. Words can be bitter sometimes and I didn't want it to be that way. Hope you forgive me :)
>
> Yours Truly,  
> Mr. Sun! :) ☀️

The wording is intentionally preserved as written.

## Final UX flow

1. Landing page with `for Dincy`, `hey…`, the main headline, sealed envelope, wax seal, and optional sound toggle.
2. The envelope opens and the letter rises without colliding with the heading.
3. The letter view shows `Dear Dincy,`, the original apology, signature, and flower details.
4. The CTA `there’s a little more on the other side →` turns the letter over.
5. The stamp view shows `a few tiny stamps for you` and `little things that reminded me of you ♡`.
6. Eight stamps are shown first. `more little stamps ↓` reveals the remaining stamps.
7. Every stamp must be opened at least once. Progress is tracked as `x of 19 little stamps opened`.
8. The final `close the letter ♡` button appears only after all 19 stamps have been discovered.
9. Clicking `close the letter ♡` reveals the ending with the miniature sealed envelope, `thank you for reading.`, `Yours Truly,` and `Mr. Sun! :) ☀️`.

The final thank you is hidden while the stamp collection is still being explored.

## Removed copy

The following lines were deliberately removed from the recipient facing experience:

- `a little handwritten honesty`
- `on the back of the letter…`

This keeps the experience cleaner and less explanatory.

## Stamp collection

The 19 stamps cover:

- her smile
- her laugh
- the 😂 she uses constantly
- coffee
- Italian food
- being a foodie
- hidden places and hidden gems
- style and fashion sense
- her glasses
- Virgo
- Temple Run
- 5'10 energy
- travel
- Bihar
- Kajoo
- Dincy Kajol
- serious pharma work
- Navy roots
- the little things that make someone interesting

Each stamp uses the same handmade line art system and flips to reveal one personal sentence.

## Copy rule

Recipient facing copy does not use em dashes. Commas, periods, or sentence breaks are used instead.

Examples:

- `That coffee still stands, by the way, whenever it feels right.`
- `The glasses really do suit you. They somehow make the whole look even more you.`
- `Dincy Kajol has a very nice ring to it. Soft, memorable, and very much its own thing.`

## Interaction details

- sealed envelope opening animation
- wax seal fade and flap opening
- handwritten paper rise
- page turn animation
- page curl cue on the continue button
- consistent postage stamp edges
- hand drawn SVG icon system
- flip reveal for every stamp
- one stamp open at a time
- expandable second stamp set
- stamp completion progress tracking
- final close letter gate
- optional generated paper rustle sound using the Web Audio API
- reduced motion support

## Responsive behavior

The site is designed for mobile, tablet, laptop, and desktop.

Mobile behavior includes:

- natural vertical growth
- two stamp columns
- smaller typography
- touch friendly controls
- no forced fixed height for the letter paper

Desktop behavior includes:

- wider handmade card composition
- four stamp columns
- larger visual spacing while keeping the envelope and letter as the main focal points

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API
- GitHub
- Vercel static hosting

No framework or build step is required.

## Repository structure

- `index.html` contains the final experience structure and recipient facing copy
- `style.css` contains the main visual system, envelope, letter, stamp layout, and responsive rules
- `final-gating.css` contains the completion progress, close letter control, and final reveal styling
- `script.js` contains envelope interaction, stamp rendering, stamp progress tracking, page turns, sound, and final gating
- `vercel.json` contains the static Vercel configuration and basic response headers
- `README.md` documents the creative brief, final UX, copy rules, and implementation decisions

## Design evolution

Important refinements made during the build:

- removed visible text from inside the closed envelope
- simplified the envelope opening so it does not overlap the headline
- reduced oversized typography and improved safe spacing
- made the yellow letter fit naturally on desktop and mobile
- replaced plain stamp cards with postage style perforated shapes
- replaced mixed emoji and symbols with a consistent hand drawn icon system
- added stamp flip reveals
- added a gated ending so the thank you only appears after every stamp has been opened
- added the sun emoji to the final Mr. Sun signature
- removed unnecessary explanatory copy
- removed em dashes from recipient facing text

## Accessibility and usability

- semantic buttons for interactions
- ARIA labels on primary controls
- hidden state management between screens
- `prefers-reduced-motion` support
- touch friendly targets on mobile
- sound is optional and never required for navigation

## Deployment notes

The site is deployed as a static Vercel project. Recipient facing production should remain publicly accessible without Vercel login protection.

## Project intent

The emotional order is:

**apology → space → warmth → personal little details → close the letter → thank you**

The site should feel personal, observant, and handmade without turning the recipient's details into a checklist or profile summary.
