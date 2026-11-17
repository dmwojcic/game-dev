# game-dev

Game project with an art pipeline driven by [pxl](https://github.com/uilianks/pxl): pixel art written
as code (`art/*.px.js`) and built into PNGs, sprite sheets + JSON, and animated GIFs in `assets/art/`.

pxl is vendored as a Claude Code skill in `.claude/skills/pxl-pixel-art`, so Claude Code (CLI,
desktop, web, or IDE) picks it up automatically in this repo. Ask it to "draw a bat enemy with a
4-frame flap" and it writes the `.px.js`, builds, checks the preview, lints, and iterates.

## Commands (Node >= 22.18, no install step)

| Command | What it does |
| --- | --- |
| `npm run art` | Build `art/game.px.js` into `assets/art/` |
| `npm run art:serve` | Live viewer at http://127.0.0.1:4321/ (rebuilds on save, annotate mode with `a`) |
| `npm run art:lint` | Pixel-art critique: orphan pixels, jaggies, pillow shading, palette issues |
| `npm run pxl -- <cmd>` | Any pxl command (`ascii`, `list`, `trace`, ...) |
| `npm run update-pxl` | Pull the latest pxl into the skill folder |

## Layout

```
art/game.px.js                  art sources
assets/art/sprites/*.png        single sprites (1x)
assets/art/anims/*.png|json|gif animation strips
assets/art/<sheet>.png|json     sprite sheets (TexturePacker-style JSON)
.claude/skills/pxl-pixel-art/   vendored pxl (MIT, see its LICENSE and UPSTREAM)
.github/workflows/art.yml       CI: builds and lints art, fails if assets/art is stale
```
