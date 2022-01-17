require('esbuild').build({
  entryPoints: ['./src/server/index.js'],
  bundle: true,
  outfile: 'dist/server.js',
  platform: 'node',
  minify: true,
  loader: {
    '.js': 'jsx',
    '.ts': 'tsx',
    '.scss': 'text',
    '.css': 'css'
  },
  watch: true,
  plugins: []
}).catch(() => process.exit(1))