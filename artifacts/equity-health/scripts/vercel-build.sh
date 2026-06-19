#!/bin/bash
set -e

# Build the Vite SPA
PORT=5000 BASE_PATH=/ pnpm run build

# Bundle the API handler with esbuild (all deps inlined)
cd ../..
pnpm exec esbuild \
  --bundle artifacts/equity-health/api/index.ts \
  --platform=node \
  --target=node20 \
  --format=esm \
  --outfile=artifacts/equity-health/api/index.js \
  --external:pg-native \
  --tsconfig=artifacts/equity-health/api/tsconfig.json \
  '--banner:js=import{createRequire}from"module";const require=createRequire(import.meta.url);'
