module.exports.readVersion = function (contents) {
  return JSON.parse(contents).version;
};

module.exports.writeVersion = function (contents, version) {
  const json = JSON.parse(contents);
  json.version = version;
  json.download = `https://github.com/j-mcneil/fvtt-module-specific-scene-songs/raw/master/package/specific-scene-songs-v${version}.zip`;

  return JSON.stringify(json, undefined, 2);
};
