---
name: CRISTIAN
description: Sitio oficial de CRISTIAN, una sola página que baja del cielo de mediodía al atardecer y termina en el Caribe de Santa Marta.
colors:
  zenith: "#2a6594"
  sky: "#3a78a6"
  haze: "#82adcb"
  haze-hi: "#a6c5da"
  dusk: "#1554a0"
  ember: "#f2a16b"
  indigo: "#062f7d"
  night: "#0a1d45"
  sea-deep: "#073c4a"
  sea: "#0b6b74"
  sand: "#f2e4c4"
  sun: "#fcff1c"
  ink: "#0b2440"
  ink-soft: "#1d3d5e"
  tee-white: "#ffffff"
typography:
  display:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 8vw, 6rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  display-hero:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(3rem, 14.6vw, 22rem)"
    fontWeight: 900
    lineHeight: 0.88
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 125"
  headline:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.6vw, 2.25rem)"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 120"
  headline-row:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 4.4vw, 3.25rem)"
    fontWeight: 900
    lineHeight: 1
    fontVariation: "'wdth' 122"
  title-track:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 3.2vw, 2.15rem)"
    fontWeight: 800
    lineHeight: 1.25
    fontVariation: "'wdth' 118"
  lead:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3.4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    fontVariation: "'wdth' 112"
  quote:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 2.9rem)"
    fontWeight: 600
    lineHeight: 1.15
    fontVariation: "'wdth' 108"
  body:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
    fontVariation: "'wdth' 100"
  label:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1.5
    fontVariation: "'wdth' 115"
  meta:
    fontFamily: "Archivo Variable, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.43
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "32px"
  section-top: "80px"
  section-top-sm: "112px"
  section-bottom: "96px"
  section-bottom-sm: "128px"
  stack: "48px"
components:
  button-play:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 24px 14px 16px"
  button-subscribe:
    backgroundColor: "{colors.tee-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
  button-subscribe-hover:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
  player-frame:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.none}"
  player-badge:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 20px 10px 14px"
  player-badge-white:
    backgroundColor: "{colors.tee-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 20px 10px 14px"
  track-row:
    textColor: "{colors.ink}"
    typography: "{typography.title-track}"
    rounded: "{rounded.none}"
    padding: "20px 8px"
  track-row-playing:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
  social-row:
    textColor: "{colors.tee-white}"
    typography: "{typography.headline-row}"
    padding: "24px 0"
  social-row-hover:
    textColor: "{colors.sun}"
---

# Design System: CRISTIAN

## Overview

**Creative North Star: "Del cielo al mar"**

The whole site is one sky that the visitor descends through. The ground is not a background color behind content; it is the place. It starts as the hazy cerulean of CRISTIAN's own photographs at midday, descends onto the Santa Marta beach and into the album's blue sea, goes to night indigo, and lands on the teal of the Caribbean at Santa Marta, closed by a strip of sand. Every region owns its color field edge to edge; nothing floats on a neutral page.

Against that sky, one voice: Exuberante highlighter yellow, set in heavy, expanded, uppercase Archivo. It names each region and marks the one action that matters (play). Body text is Archivo at normal width, white on the dark regions and ink on the pale haze. Media sits in hard-edged dark frames that open into the YouTube player in place; nothing becomes a card, nothing gets rounded.

Density is low and the type is large. Lists are ruled, not boxed: the tracklist and the channel list are thick-topped, hairline-divided rows whose whole width is the hit target.

**Key Characteristics:**
- One continuous ground that changes with scroll (sky, dusk, night, sea), with fixed stepped bands as the no-JS and reduced-motion fallback.
- Sun yellow is the only accent: display type, the primary play action, the playing state.
- Archivo variable carries everything; the width axis does the hierarchy work (125 display, 112-122 heads, 100 body).
- Square corners everywhere except the literal sun.
- Media opens in place; one track plays at a time.

## Colors

The palette is sampled from the sky in the artist's photographs and the sea at Santa Marta, plus one highlighter yellow taken from the Exuberante cover.

### Primary
- **Exuberante Highlighter** (sun): the single accent. All display headlines on dark ground, the hero play button, the default player badge, the playing track row, hover state of the subscribe button and social rows, text selection, focus rings and the scrollbar thumb.

### Neutral
- **Cover Ink** (ink): text on every pale surface (haze-hi, sand, yellow, white); the dark frame behind every video before it loads.
- **Soft Ink** (ink-soft): secondary text on pale ground, such as meta lines, track numbers and durations, footer lines.
- **White Tee** (tee-white): body text on all dark ground (90% for long passages, 85% for meta). Also the surface of the subscribe button and the secondary player badge. The world contract asked for white only on player frames; the build uses it for these two small solid surfaces and never for panels.
- **Shoreline Sand** (sand): the footer strip at the end of the sea, with ink text.

### Ground (the sky ramp)
These are regions, not accents. Each one fills a whole band of the page and drives the ground interpolation.
- **Zenith Blue** (zenith): top of the hero sky, the html/body base, and `theme-color`.
- **Midday Sky** (sky): the "Lo nuevo" region and the top of the descent band.
- **Haze** (haze): lower hero sky, where the photo melts into the page.
- **High Haze** (haze-hi): the album region, the palest ground; the only large light-ground region besides the footer, so its content switches to ink.
- **Dusk Blue** (dusk): reserved; the sea scene uses its own water blues (#0b3f78 deep, #2b78b4 shallow).
- **Horizon Ember** (ember): retired. The sunset was replaced by the Exuberante sea; ember is no longer used on the page.
- **Night Indigo** (indigo): the videos region and the top of the story region.
- **Night** (night): the deepest point, under the story and above the horizon line.
- **Deep Sea** (sea-deep) and **Caribbean Teal** (sea): the water band and the closing channels region.

### Named Rules
**The One Sun Rule.** Sun yellow is the only accent color. If something needs emphasis and is not a display headline, the primary play action, or a state (playing, hover, focus, selection), it does not get yellow.

**The Ground Is Place Rule.** Every section declares a ground color from the sky ramp (as `data-ground`, either one color or `from>to`), and the page interpolates between them. Never add a section with an off-ramp background or a neutral gray panel.

**The Ink On Light Rule.** On haze-hi, sand, yellow and white, text and focus rings switch to ink (the region carries `on-light`). Everywhere else, text is white and focus is yellow.

## Typography

**Display Font:** Archivo Variable (with system-ui, sans-serif)
**Body Font:** Archivo Variable, the same family at normal width

**Character:** One grotesque family worked across its width axis. The expanded, black, uppercase display reads like the Exuberante cover; the narrower widths below it keep long text calm.

### Hierarchy
- **Display** (900, wdth 125, uppercase, -0.02em, line-height 0.88): section names in yellow ("Exuberante", "Lo nuevo", "Videos oficiales", "Historia", "Desde Santa Marta") and the footer wordmark in ink. On the haze-hi album region it is set in ink. The hero name uses the display-hero size and runs edge to edge across the top of the first viewport.
- **Lead** (700, wdth 112, line-height 1.05): the hero tagline, in ink on the pale lower sky.
- **Headline** (800, wdth 120, uppercase): titles under media (singles, secondary videos). The lead video title goes to 900 / wdth 122 at clamp(2rem, 5vw, 3.75rem).
- **Headline Row** (900, wdth 122, uppercase, line-height 1): channel names in the shore list.
- **Title Track** (800, wdth 118, sentence case): tracklist song titles.
- **Quote** (600, wdth 108, line-height 1.15, hanging punctuation): the scripture blockquote.
- **Body** (400, wdth 100, 1.125rem, line-height 1.625): long text, capped at 62ch; short intros at 34-46ch. Paragraphs use `text-wrap: pretty`, headings `balance`.
- **Label** (800, wdth 115, uppercase): the primary play button. Player badges use 700, 0.875-1rem, wdth 112.
- **Meta** (500-600, 0.875-1rem, tabular numerals): dates, durations, track numbers, album facts.

### Named Rules
**The Width Is Hierarchy Rule.** Rank comes from the width axis together with weight: 125 for display, 112-122 for heads and actions, 100 for reading text. Do not bring in a second family to make contrast.

**The Uppercase Is Loud Rule.** Uppercase belongs to display, headlines, the channel rows and action labels. Body, quotes, track titles and meta stay in sentence case.

## Layout

Single column of full-bleed regions stacked top to bottom; content sits in one centered container, max-w-7xl (80rem), in every region. Side gutters are 16px, 32px from 640px up. Sections breathe on a consistent rhythm: 80px top / 96px bottom on mobile, 112px / 128px from 640px; the hero is a full 100svh and the singles region tucks up (32px top) under the sky transition band.

Grids are asymmetric. The album pairs a sticky player (1.1fr) with the tracklist (1fr) from 1024px. Singles sit on a 12-column grid alternating 7/5 then 5/7 spans. Videos lead with one full-width film, then two columns from 768px. The story pairs text (1fr) with a quote offset downward (1.15fr). Gaps between grid items are 32-56px horizontally and 40-56px vertically.

Transition bands between regions (sky to sky, the descent at 100svh pinned plus the 110svh sea, the shore horizon at 16svh plus 22svh) are part of the layout. They carry the ground from one color to the next and are `aria-hidden`.

Breakpoints are Tailwind defaults (640, 768, 1024). Phone first: in the hero the photo sits at top right at min(100%, 52svh) and moves to the bottom right at 52% width from 1024px.

## Elevation & Depth

Depth comes from the sky itself (gradient ground, the photo fading into it, the setting sun), not from stacked surfaces. The only shadows are soft, ink-tinted, negative-spread drops under media frames and the play actions, so they read as objects hanging in air above the sky. There are no hard offset shadows and no shadows on text or rows.

### Shadow Vocabulary
- **Action lift** (`box-shadow: 0 10px 30px -10px rgb(11 36 64 / 0.6)`): the hero play button.
- **Badge lift** (`box-shadow: 0 8px 24px -8px rgb(11 36 64 / 0.55)`): the play badge on every player.
- **Player hang** (`box-shadow: 0 18px 40px -16px rgb(11 36 64 / 0.7)` hero; `0 24px 50px -24px rgb(11 36 64 / 0.55)` album): frames on pale sky.
- **Night hang** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.7)`): the lead video on indigo, where an ink tint would disappear.

### Named Rules
**The Hanging Frame Rule.** Shadows are always soft, tinted, and pulled in by a negative spread, and they go only under media frames and play actions. Rows, text and sections never get one.

## Shapes

Hard rectangles throughout: buttons, badges, player frames, rows and selection all have 0 radius. The only round forms are the sun dots in the rhythm band; the focus ring takes a 2px softening. Structure comes from rules, not boxes: lists open with a 2px rule in the region's text color (ink or white) and divide rows with 1px rules at 25-35% of that color. Photos have no frames; they melt into the ground through gradient masks (hero photo, descent photo).

## Components

### Buttons
Solid, square, loud only when they mean play.
- **Shape:** square (0px).
- **Primary (play):** sun on ink, label type (800, wdth 115, uppercase), 14px 24px 14px 16px, filled play glyph (SVG) leading at 24px, action-lift shadow. Hover rises 2px over 300ms on the expo-out curve.
- **Subscribe:** white on ink, 700 at 0.875rem, 8px 14px, YouTube mark in brand red at 16px; hover turns the fill to sun.
- **Text link (secondary):** ink, 600, underline at 40% ink that goes to full ink on hover. Underline offset 0.2em, thickness 0.08em sitewide.
- **Focus:** a 3px yellow outline at a 3px offset; ink on light regions.

### Player (signature)
A click-to-load facade for `youtube-nocookie`: an ink 16:9 frame holding the release artwork and a square play badge at bottom left (6% / 4%). Badge is sun by default and white on indigo for secondary videos. On hover the art scales to 1.02 and dims to 92% brightness (500ms) and the badge rises 2px. Clicking swaps the facade for an autoplaying iframe in the same frame; starting any player restores the previously active one, so only one track sounds at a time.

### Tracklist rows
Ruled, full-width buttons on a 3-column grid (number, title, duration). The number and duration use meta type in soft ink; the title is title-track type. Hover tints the row white at 45% and shows a play glyph; the row driving the album player carries `aria-pressed="true"`, fills sun, and shows a small uppercase "Sonando" state tag. A pressed row also scrolls the sticky player into view.

### Channel rows (navigation out)
The shore list: white rows, a brand mark at 28-36px, the channel name in headline-row type, the handle on the right from 640px, and a square-capped diagonal arrow. Hover turns the whole row sun and moves the arrow 4px up and right.

### Top navigation
Plain white 600 text links at 0.875rem in the hero sky, with a 2px sun underline on hover; from 768px. Below 768px the slot shows the origin line instead. The subscribe button sits on the right at every width.

### The descent (signature)
Before the sea, a full-viewport scene pins for 160% of a screen: the uncropped Santa Marta beach photo starts at 2.6x on its own sky, so it reads as a continuation of "Lo nuevo", and the scroll scrubs it back to 1x until CRISTIAN pointing up, the Sierra and the Caribbean are in frame. Midway, "Santa Marta" rises letter by letter in yellow display type; "Colombia · Mar Caribe" follows. Sky gradients close the top and bottom so the scene joins the page sky. With reduced motion it is a static full photo.

### The Exuberante sea (signature, Three.js)
After the descent, a 110svh band renders the sea in WebGL (`src/scripts/sea.ts`, lazy-loaded one screen ahead): four Gerstner waves, a sky dome from haze-hi to sky to zenith, Fresnel reflection, a white midday glint and haze fog to the horizon. No orange, no sunset: the palette is the album's sea-and-sky blue. Scroll scrubs the camera from high above the water, looking down, to skimming the waves; the band closes into indigo for the videos. It renders only while on screen and the tab is visible, DPR capped at 1.75. Reduced motion draws one still frame; without WebGL the band keeps its CSS sea gradient.

### Lo nuevo (horizontal track)
The singles sit in one row, newest first. Without JS or with reduced motion it is a native scroll-snap row. With motion the section pins under the sticky bar and vertical scroll drives the row sideways; the slide reaching the front scales from 0.84 to 1 and lights from 45% opacity, each cover drifts inside its frame (parallax), and a yellow rule under the header fills with progress.

### Sticky bar
After the hero, an ink bar drops in with the CRISTIAN wordmark in sun, the section links (1024px up), a "Sonando · título" line with the equalizer once any track plays, and the subscribe button. It is `inert` while hidden.

### Equalizer
Three square bars in the text color that pulse while a song plays: on the pressed tracklist row and in the sticky bar. Static with reduced motion.

### Rhythm band
The haze-hi to sky transition band carries "Salsa · Urbano · Adoración" in white display type with small sun dots as separators, scrubbed sideways against the scroll. Decorative and `aria-hidden`.

### Continuous ground (signature)
Every region declares `data-ground`. With JS and motion allowed, the page sets `html.js-ground`, makes undecorated regions transparent, and paints the body with a `--ground` color mixed from the region under the viewport's midline (250ms linear). Painted regions (`data-ground-keep`: hero, descent and sea, shore) keep their own art; `data-ground-late` finishes the mix just as the region's bottom edge enters the viewport so the next painted region starts seamlessly. Without JS, or with reduced motion, each region's own background shows as a fixed stepped band.

## Motion

GSAP 3 (ScrollTrigger, SplitText) in `src/scripts/motion.ts`, all inside `gsap.matchMedia('(prefers-reduced-motion: no-preference)')`; content is visible by default and the only pre-hidden elements are the three hero intro parts (`html.intro`, with a CSS failsafe at 2.5s).

- **Hero intro** (once, ~1.4s, expo.out): CRISTIAN rises letter by letter from masks, the photo clears from blur and overexposure like eyes opening to the sky, the copy follows. On scroll the name lags and the photo sinks (scrub).
- **Width is motion:** every region display heading scrubs its `font-stretch` from 62% to 125% as it enters. This is the page's recurring motif; do not add a second heading entrance.
- **Lists** (tracklist, channels) arrive as lists: a single 60ms stagger, once.
- **Hero photo** rises 90px from behind a bottom clip as the name lands (no filters: blur on the masked photo painted black on first load).
- **Lo nuevo** is a pinned horizontal track (see Components). **Lead video** stands up from a 26deg tilt like a screen lifting off the table; the other two videos float in at different depths. **Gálatas 2:20** lights word by word from 18% opacity as it is read, then a yellow rule draws under it. The shore horizon line opens from the center; the footer wordmark rises letter by letter.
- Easing: `expo.out` for arrivals, `none` for scrubbed tweens; scrub smoothing 0.4-1.

## Do's and Don'ts

### Do:
- **Do** give every new region a ground color from the sky ramp and declare it with `data-ground`, keeping the fixed band as its own background for the fallback.
- **Do** set every region name in the display style: Archivo 900, wdth 125, uppercase, in sun on dark ground and ink on haze-hi or sand.
- **Do** let media open in place through the Player facade, keeping one active player at a time and `aria-pressed` on rows that drive a shared player.
- **Do** build lists as ruled rows (2px top rule, 1px dividers at 25-35%) whose full width is the hit target.
- **Do** switch text and focus to ink on pale regions by marking them `on-light`.
- **Do** honor reduced motion: no ground interpolation, a still sea frame, no pin or scrub, near-instant transitions.

### Don't:
- **Don't** put content in cards, rounded containers or neutral gray panels; color fields own whole regions.
- **Don't** use gradients as decoration on buttons, text or frames. Gradients exist only to paint the sky, the sunset, the sea and the photo masks.
- **Don't** introduce a second accent. Ember belongs to the horizon only, and white is a surface only for the subscribe button and the secondary badge.
- **Don't** round corners on interface elements; the sun is the only circle.
- **Don't** use hard offset shadows, or any shadow outside media frames and play actions.
- **Don't** add a label above section headings; the display headline names the region alone.
