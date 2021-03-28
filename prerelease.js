const fs = require('fs');

fs.readFile('./package/module.json', (err, data) => {
  if (err) throw err;

  const module = JSON.parse(data);
  const { version } = module;

  const alteredVersion = version.replace(/\./g, '');

  fs.writeFile(
    `./package/module${alteredVersion}.json`,
    JSON.stringify(
      { ...module, manifest: module.manifest.replace('module.json', `module${alteredVersion}.json`) },
      undefined,
      2
    ),
    () => {}
  );
});
