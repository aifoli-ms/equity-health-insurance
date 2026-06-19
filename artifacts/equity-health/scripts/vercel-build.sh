#!/bin/bash
set -e

REPO_ROOT=$(cd ../.. && pwd)
OUT=".vercel/output"

# 1. Build the Vite SPA
PORT=5000 BASE_PATH=/ pnpm run build

# 2. Bundle the API handler (all deps inlined, no external imports)
ESBUILD=$(find "$REPO_ROOT/node_modules/.pnpm" -path "*/esbuild/bin/esbuild" -type f | head -1)
"$ESBUILD" \
  --bundle _api/index.ts \
  --platform=node \
  --target=node20 \
  --format=esm \
  --outfile="$OUT/functions/api/index.func/index.mjs" \
  --external:pg-native \
  --tsconfig=_api/tsconfig.json \
  '--banner:js=import{createRequire}from"module";const require=createRequire(import.meta.url);'

# 3. Create function config
cat > "$OUT/functions/api/index.func/.vc-config.json" << 'VCEOF'
{
  "handler": "index.mjs",
  "runtime": "nodejs20.x",
  "launcherType": "Nodejs",
  "shouldAddHelpers": true,
  "shouldAddSourcemapSupport": false
}
VCEOF

# 4. Move static files
rm -rf "$OUT/static"
mv dist/public "$OUT/static"

# 5. Create route config with SPA fallback
cat > "$OUT/config.json" << 'CFGEOF'
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    {
      "src": "^/api(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?$",
      "dest": "/api?path=$1",
      "check": true
    },
    { "src": "^/api(/.*)?$", "status": 404 },
    { "handle": "miss" },
    { "src": "^(?!/api).*$", "dest": "/index.html", "status": 200 }
  ]
}
CFGEOF

echo "Build complete: static + bundled API function"
