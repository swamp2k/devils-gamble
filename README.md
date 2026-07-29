# Devil's Gamble

A tiny single-player push-your-luck game about guessing what the Devil would choose.

## Core loop

- Two cards present a moral dilemma, absurd preference, petty inconvenience, or nonsense choice.
- A hidden Devil personality scores both options differently.
- Guess correctly to increase the pot.
- Cash out or double down.
- Guess wrong and the current victim meets the active death contraption.
- Spend banked Hell Chips on Peek, Reroll, or Insurance.

## Current prototype

This first version is deliberately build-free:

- `index.html`
- `styles.css`
- `game.js`

No npm install, framework, database, or server is required.

Open `index.html` locally, or deploy the repository root as a static Cloudflare Pages project.

## Cloudflare Pages

For a direct Git integration deployment:

- Framework preset: **None**
- Build command: **leave empty**
- Build output directory: **/** (repository root)

## Assets

The center victim is currently a CSS placeholder so the gameplay prototype has no external asset dependency.

The intended next pass is to replace it with non-animal Kenney character assets and add more bespoke death animations. Keep the game logic independent from artwork so victim sprites can be swapped without changing round logic.

## Design direction

Keep it loose, surprising, quick, darkly silly, and slightly unfair. The player should gradually think they understand the dealer, but never feel entirely safe.
