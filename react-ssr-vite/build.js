const { sync } = require('execa');

const mode = process.argv[2] || 'production';

const commonCommand = ['vite', 'build', '--mode', mode]
const clientCommand = [...commonCommand, '--ssrManifest']
const serverCommand = [...commonCommand, '--ssr', './server.js', '--emptyOutDir', 'false']

sync('npx', clientCommand, { stdio: 'inherit' });
sync('npx', serverCommand, { stdio: 'inherit' });
