const fs = require('fs');

function parsePackage(filename) {
  let json;

  try {
    const content = fs.readFileSync(filename);
    json = JSON.parse(content);
  } catch(error) {
    json = {};
  }

  return json;
}

module.exports = parsePackage;
