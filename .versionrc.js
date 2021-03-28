module.exports = {
  scripts: {
    prerelease: 'node prerelease.js',
    prebump: 'npm run build',
    postbump: 'node postbump.js',
    precommit: 'git add -A',
  },
  bumpFiles: [
    {
      filename: 'package/module.json',
      updater: 'module-updater.js',
    },
  ],
};
