#!/bin/bash
set -e

# Build the Vite SPA
PORT=5000 BASE_PATH=/ pnpm run build

# Bundle the API handler with esbuild (all deps inlined)
REPO_ROOT=$(cd ../.. && pwd)
"$REPO_ROOT/node_modules/.bin/esbuild" \
  --bundle api/index.ts \
  --platform=node \
  --target=node20 \
  --format=esm \
  --outfile=api/index.js \
  --external:pg-native \
  --tsconfig=api/tsconfig.json \
  '--banner:js=import{createRequire}from"module";const require=createRequire(import.meta.url);'
