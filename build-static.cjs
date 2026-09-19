const fs = require('fs');
const path = require('path');

// Publish only the assets used by the website.
const assets = [
  'index.html',
  'css/styles.css',
  'js/app.js',
  'js/jobs.js',
  'js/courses.js',
  'js/career.js',
  'images/opencareers.svg',
  'images/bunpithak.jpg',
  'images/nichapa.png'
];
const output = path.join(__dirname, 'dist', 'static');
for (const asset of assets) {
  const destination = path.join(output, asset);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(__dirname, asset), destination);
}
console.log('Built static website: ' + assets.length + ' assets');
