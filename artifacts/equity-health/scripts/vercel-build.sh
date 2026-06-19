#!/bin/bash
set -e

REPO_ROOT=$(cd ../.. && pwd)
ESBUILD=$(find "$REPO_ROOT/node_modules/.pnpm" -path "*/esbuild/bin/esbuild" -type f | head -1)

# 1. Build the Vite SPA
PORT=5000 BASE_PATH=/ pnpm run build

# 2. Bundle the API handler into api/index.js
#    The api/ directory is created fresh — it's not in git
mkdir -p api
"$ESBUILD" \
  --bundle server/api.ts \
  --platform=node \
  --target=node20 \
  --format=esm \
  --outfile=api/index.js \
  --external:pg-native \
  --tsconfig=tsconfig.json \
  '--banner:js=import{createRequire}from"module";const require=createRequire(import.meta.url);'

echo "Build complete: SPA + bundled API"
