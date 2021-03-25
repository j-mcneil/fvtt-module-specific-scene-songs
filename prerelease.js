const fs = require('fs');

fs.readFile('./package/module.json', (err, data) => {
  if (err) throw err;
  
  const { version } = JSON.parse(data);

  fs.writeFile(`./package/module${version.replace(/\./g, '')}.json`, data, () => {});
});
