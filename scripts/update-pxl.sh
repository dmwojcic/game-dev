#!/usr/bin/env bash
# Refresh the vendored pxl skill from upstream (default: uilianks/pxl, main).
# Usage: npm run update-pxl [-- <git-url> [<ref>]]
set -euo pipefail
URL="${1:-https://github.com/uilianks/pxl.git}"
REF="${2:-main}"
DEST=".claude/skills/pxl-pixel-art"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
git clone --depth 1 --branch "$REF" "$URL" "$TMP/pxl"
rm -rf "$DEST"
mkdir -p "$DEST"
( cd "$TMP/pxl" && cp -r bin src types examples SKILL.md reference.md lighting.md LICENSE README.md package.json tsconfig.json "$OLDPWD/$DEST/" )
echo "${URL#https://github.com/}@$(git -C "$TMP/pxl" rev-parse HEAD)" | sed 's/\.git@/@/' > "$DEST/UPSTREAM"
echo "pxl updated to $(cat "$DEST/UPSTREAM"). Rebuild with: npm run art"
