#!/bin/bash
set -e

REPO_ROOT=$(cd ../.. && pwd)
ESBUILD=$(find "$REPO_ROOT/node_modules/.pnpm" -path "*/esbuild/bin/esbuild" -type f | head -1)

# 1. Build the Vite SPA
PORT=5000 BASE_PATH=/ pnpm run build

# 2. Bundle the API handler into api/index.js (replaces the TS source)
#    All workspace deps are inlined so Vercel's function builder has nothing to resolve
"$ESBUILD" \
  --bundle api/index.ts \
  --platform=node \
  --target=node20 \
  --format=esm \
  --outfile=api/index.js \
  --external:pg-native \
  --tsconfig=api/tsconfig.json \
  '--banner:js=import{createRequire}from"module";const require=createRequire(import.meta.url);'

# Remove TS source so Vercel's builder uses the bundled JS
rm api/index.ts

echo "Build complete: SPA + bundled API"
