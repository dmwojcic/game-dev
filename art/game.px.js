// Starter art for the game. Build: npm run art   Watch live: npm run art:serve
// API: .claude/skills/pxl-pixel-art/SKILL.md (quick) and reference.md (full).

pal({ k: "#1b1630", w: "#fff6e0", s: "#f2c8a0", S: "#c98a6b", h: "#5a3a2e", y: "#ffd34e", o: "#e08a2c" })
shades("1234", "#3f6fd8")   // blue cloth ramp, dark -> light
shades("5678", "#5fb84a")   // green slime ramp

// Hero, 12x16: write the left half, mirror it, selective outline.
sprite("hero", { mx: true, selout: "k" }, `
  ...hhh
  ..hhhh
  ..hsss
  ..skss
  ..ssss
  ...SSS
  ..3333
  .43333
  .s3443
  .s3333
  ..3222
  ..2222
  ..22.2
  ..22.2
  ..hh.h
  .hhh.h`)

sprite("slime", { mx: true, selout: "k" }, `
  ....677
  ..66787
  .6668w7
  6666k66
  5666666
  .555555`)
sprite("slime_red", { base: "slime", swap: { 5: "#7a2030", 6: "#c8323c", 7: "#e8606a", 8: "#ffb0a0" } })

anim("coin", { w: 8, h: 8, frames: 6, fps: 10 }, (c) => {
  const r = Math.max(0.6, Math.abs(Math.cos(c.phase * Math.PI)) * 3.5)
  c.ellipse(3.5, 3.5, r, 3.5, "o")
  if (r > 1.5) c.ellipse(3.5, 3.5, r - 1, 2.5, "y")
})

sheet("chars", ["hero", "slime*"], { pad: 1 })
