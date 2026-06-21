#!/bin/bash
set -e

REPO_ROOT=$(cd ../.. && pwd)
ESBUILD=$(find "$REPO_ROOT/node_modules/.pnpm" -path "*/esbuild/bin/esbuild" -type f | head -1)

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

echo "API bundle complete: api/index.js"
