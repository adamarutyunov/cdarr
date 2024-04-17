const path = require('path');
const pug = require('pug');
const fs = require('fs-extra');
const globby = require('globby');
const { ncp } = require('ncp');

const viewsDir = path.resolve(__dirname, '..', 'src', 'pug');
const staticDir = path.resolve(__dirname, '..', 'static');
const siteDir = path.resolve(__dirname, '..', 'site');

const static = require('../static/script/static.js')
const projects = static.projects

const pugOptions = {
  basedir: viewsDir,
  pretty: true,
  projects
};

const pugIgnore = ['base', 'mixins']
const pugNoSubfolder = ['index']

const compilePugToHtml = pugPath => {
  const fileName = path.basename(pugPath, '.pug');

  if (pugIgnore.includes(fileName)) return;

  const html = pug.renderFile(pugPath, pugOptions);
  const fileDir = path.dirname(path.relative(viewsDir, pugPath));

  let htmlPath
  if (pugNoSubfolder.includes(fileName)) {
    htmlPath = path.resolve(siteDir, fileDir, `${fileName}.html`);
  } else {
    htmlPath = path.resolve(siteDir, fileDir, fileName, 'index.html');
  }

  const htmlDir = path.dirname(htmlPath);

  if (!fs.existsSync(htmlDir)) fs.mkdirSync(htmlDir, { recursive: true });
  fs.writeFileSync(htmlPath, html);
};

// Remove stale site's build.
if (fs.existsSync(siteDir)) {
  fs.removeSync(siteDir);
}

// Create site's directory.
fs.mkdirSync(siteDir);
fs.mkdirSync(path.resolve(siteDir, 'static'));

// Build pug files to html files.
globby(viewsDir).then(pugPaths => pugPaths.forEach(compilePugToHtml));

// Copy static files.
ncp(staticDir, path.resolve(siteDir, 'static'));
