module.exports.readVersion = function (contents) {
  return JSON.parse(contents).version;
}

module.exports.writeVersion = function (contents, version) {
  const json = JSON.parse(contents)
  json.version = version
  json.download = `https://github.com/j-mcneil/single-scene-song/raw/master/package/single-scene-song-v${ version }.zip`;


  return JSON.stringify(json, undefined, 2);
}