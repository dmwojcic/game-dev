# Game dev project

## Art pipeline (pxl)

All pixel art is code. Sources live in `art/*.px.js`; built PNGs, sprite sheets and JSON go to
`assets/art/` and are committed so the game can load them directly.

- The `pxl-pixel-art` skill (`.claude/skills/pxl-pixel-art/SKILL.md`) is the workflow and DSL guide.
  Load it before drawing or editing any art. Full API: `reference.md` in the same folder; read
  `lighting.md` there only when a scene needs lights.
- CLI: `node .claude/skills/pxl-pixel-art/bin/pxl.js` (also `npm run pxl -- <args>`). Needs Node >= 22.18.
- Build: `npm run art` (writes to `assets/art/`). While iterating, build one asset with
  `npm run pxl -- build art/game.px.js --out assets/art --only <name>`.
- Look at `assets/art/_preview/<name>.png` after every change; use `pxl ascii` for exact pixel fixes.
- Run `npm run art:lint` before calling any sprite done. Fix findings or say why they're intended.
- Live viewer: `npm run art:serve` (http://127.0.0.1:4321/). When the user says "check the
  feedback", read `assets/art/_feedback/<asset>.json` and `<asset>.annotated.png`.
- Always rebuild and commit `assets/art/` together with the `.px.js` change; CI fails if they differ.
- Don't edit files under `.claude/skills/pxl-pixel-art/` by hand. Update with `npm run update-pxl`.
- If the game uses Godot 4, add `--godot` to the `art` script to emit `SpriteFrames` `.tres` files.
