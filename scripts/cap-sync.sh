#!/bin/sh
set -e
node scripts/prepare-capacitor-www.mjs
export PATH="$HOME/.bun/bin:$PATH"
exec bun --bun node_modules/@capacitor/cli/bin/capacitor sync "$@"
