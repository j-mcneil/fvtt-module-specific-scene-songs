module.exports = {
  scripts :{
    prerelease: "node prerelease.js",
    prebump: "npm run build",
    postbump: "node postbump.js"
  },
  bumpFiles: [
    {
        filename: "package/module.json",
        updater: "module-updater.js"
    }
  ]
};