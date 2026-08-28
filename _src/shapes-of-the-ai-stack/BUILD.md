# Building this explainer

Source for `explainers/shapes-of-the-ai-stack.html`. Vite + React + TypeScript,
bundled by vite-plugin-singlefile into one self-contained HTML file.

From this directory:

    npm install
    npm run build
    cp dist/index.html ../../explainers/shapes-of-the-ai-stack.html

Then publish from the repo root as usual.

Notes:
- `base: './'` is set so the built file works from file:// and from a subpath.
- No API keys, no env vars, no runtime network calls. Google Fonts is the only
  external request.
