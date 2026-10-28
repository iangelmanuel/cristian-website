# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro + Tailwind CSS (user choice). Static output, deployable to any static host.

## Users

Primary: Spanish-speaking Christian listeners — young people and families — who arrive from YouTube, Instagram, TikTok or Spotify links, mostly on a phone. They want to hear CRISTIAN's music, know who he is, and follow him. Success for them: press play within seconds, find the song they came for, and subscribe/follow.

Secondary (not a goal of this surface): churches or organizers. No booking/contact channel exists yet; do not invent one.

## Product Purpose

The official home of CRISTIAN on the web: one place that gathers his songs, his album *Exuberante*, his official videos, his story and his channels. Success = plays, YouTube subscriptions, and follows on Instagram/Spotify/TikTok.

## Positioning

A young Christian artist from Santa Marta, Colombia, who mixes salsa, urban and worship with an openly Christ-centered message ("Discípulo de Jesucristo."). Caribbean coastal roots + joyful tropical rhythm + scripture-titled songs (Salmo 1, Gálatas 2:20) is the combination no neighboring artist page can claim.

## Operating Context

- Visitors usually come from a social bio link or a shared song; phone-first, often on mobile data.
- All music currently lives on YouTube (embeds are the playback mechanism). Spotify presence confirmed by the user; artist URL still pending.
- Channel created 8 May 2025; catalogue grows over time, so song data must be easy to append.

## Capabilities and Constraints

- Static landing page, Spanish (`lang="es"`).
- Song catalogue maintained in a data file (`src/data/songs.ts`).
- YouTube embeds via privacy-enhanced `youtube-nocookie.com`, loaded only on user intent.
- Open: Spotify artist URL; booking/contact email; any press photos beyond YouTube assets.

## Brand Commitments

- Artist name: **CRISTIAN** (uppercase, as on every release title).
- Handles: YouTube `@Cristiansog`, Instagram `@cristian.sog`, TikTok `@cristiansog`.
- Self-description: "Discípulo de Jesucristo."
- Origin: Santa Marta, Colombia.
- Genre: mix of salsa, urbano and adoración.

## Evidence on Hand

Verified from YouTube (Oct 2026): 682 subscribers, ~11.8k total views, joined 8 May 2025. Instagram ~2.5k followers.

Releases (YouTube video IDs):
- Album **Exuberante** (Audio Oficial): Te Adoro `mt66dTLxm2A`, Perdón `e4PqDyBdjkQ`, Me Siento Relajao `sN_XwbhonvY`, Príncipe De Paz `nLSw3k1jmZc`, Mi Amigo Fiel `TjVo1_prC-4`, No Te Rindas `gb83FuKk_fE`, Padre Ayúdame `_m7XUgoH9S8`.
- Official videos: Gálatas 2:20 `6YzlluyjbpU`, Cristo Es Lo Mejor `t_8r-kQQccc`, Gracias Mamá `F6hRmsnjTwo`.
- Singles/audios: Gracia `NHrGsMuRyDY`, Salsalipsis `ftVd34bSu7U`, Mi Artista Favorito `Rq77ODHkigI`, Salmo 1 `8fOxGKcCnuo`.

Assets: YouTube avatar, channel banner, video thumbnails (in `src/assets/`).

Absences — never fabricate: no long-form biography, no testimonials, no press, no tour dates, no awards, no label, no release dates per track, no booking contact.

## Product Principles

1. Music first: a song must be playable from the first screen.
2. Faith stated plainly: the message is the identity, not decoration.
3. Only true facts: every claim traceable to a public source or the artist.
4. Built to grow: new songs added by editing data, not layouts.
5. Light on the phone: fast on mobile data; heavy embeds load on demand.

## Accessibility & Inclusion

WCAG 2.2 AA. Keyboard-operable players, visible focus, alt text on all imagery, respects `prefers-reduced-motion`.
