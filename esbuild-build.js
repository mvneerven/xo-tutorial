// https://esbuild.github.io/api/
const esbuild = require("esbuild");
const { markdownPlugin } = require("esbuild-plugin-markdown");

esbuild.build({
    plugins: [
        markdownPlugin()
    ],
    entryPoints: ['js/index.js'],
    bundle: true,
    format: "esm",
    minify: true,
    outfile: 'dist/index.js',
  }).catch(() => process.exit(1))