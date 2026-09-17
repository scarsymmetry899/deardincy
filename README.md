# Dear Dincy

A handmade interactive apology letter built as a small personal website.

The experience is designed to feel like opening a real handmade card rather than reading a normal webpage. It combines a sealed envelope, a handwritten apology, a page turn interaction, a collection of personal postage stamps, and a final signed thank you note.

## Live experience

Production alias:

`https://deardincy-abhitejachn-8733s-projects.vercel.app`

## Creative direction

The visual language is inspired by handmade greeting cards and postage: warm ivory paper, deep faded cobalt borders, burgundy stitched details, muted yellow letter paper, imperfect paper edges, tiny flowers, handwritten navy and burgundy typography, and subtle paper texture.

The apology remains the emotional focus. Personal details appear only after the letter as optional little discoveries.

## Main apology

> Dear Dincy,
>
> Hope this letter finds you well. Over the last few days we shared a lot of laughs and fun vibe, however somethings which I have said may have not really felt pleasant. I really feel bad for what I said. I've been thinking about it a lot and its left a void in me. Honestly, it feels like a bad dream and your silence is killing me. I just wanted to apologise once again for my mistake. Words can be bitter sometimes and I didn't want it to be that way. Hope you forgive me :)
>
> Yours Truly,  
> Mr. Sun! :) ☀️

The wording is intentionally preserved as written.

## Current UX flow

1. Landing page with `for Dincy`, `hey…`, the main headline, sealed envelope, wax seal, and optional sound toggle.
2. Envelope opens and the letter rises without colliding with the heading.
3. The letter view shows only `Dear Dincy,`, the original apology, signature, and flower details. The previous `a little handwritten honesty` line has been removed.
4. The CTA `there’s a little more on the other side →` turns the letter over.
5. The stamp view shows `a few tiny stamps for you` and `little things that reminded me of you ♡`. The previous `on the back of the letter…` line has been removed.
6. Eight stamps are shown first. `more little stamps ↓` reveals the remaining stamps.
7. Every stamp must be opened at least once. Progress is tracked as `x of 19 little stamps opened`.
8. The final `close the letter ♡` button appears only after all 19 stamps have been discovered.
9. Clicking `close the letter ♡` reveals the dedicated ending with the miniature sealed envelope, `thank you for reading.`, `Yours Truly,` and `Mr. Sun! :) ☀️`.

The thank you ending is therefore never visible while the stamp collection is still being explored.

## Stamp topics

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

## Current wording rule

All em dashes were removed from recipient facing copy. Punctuation now uses commas, periods, or sentence breaks instead.

Examples:

- `That coffee still stands, by the way, whenever it feels right.`
- `The glasses really do suit you. They somehow make the whole look even more you.`
- `Dincy Kajol has a very nice ring to it. Soft, memorable, and very much its own thing.`

## Responsive behavior

The site is designed for mobile, tablet, laptop, and desktop. Mobile uses natural vertical growth, two stamp columns, smaller typography, touch friendly controls, and no forced fixed height for the letter paper. Desktop uses four stamp columns and a wider handmade card composition.

## Interaction details

- envelope opening animation
- page turn animation
- page curl cue on the continue button
- consistent postage stamp edges
- flip reveal for every stamp
- one stamp open at a time
- optional generated paper rustle sound using the Web Audio API
- reduced motion support
- progress based final reveal

## Tech stack

- HTML
- CSS
- Vanilla JavaScript
- Web Audio API
- GitHub
- Vercel static hosting

No framework or build step is required.

## Repository structure

- `index.html` contains the current experience structure
- `style.css` contains the main visual system and responsive layout
- `final-gating.css` contains stamp completion, close letter, and final reveal styling
- `script.js` contains envelope interaction, stamp rendering, stamp progress tracking, page turns, sound, and final gating
- `vercel.json` contains deployment configuration

## Design intent

The emotional order is:

**apology → space → warmth → personal little details → close the letter → thank you**

The site should feel personal, observant, and handmade without turning the recipient's details into a checklist or profile summary.
