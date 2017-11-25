var lunr = require("lunr"),
  fs = require("fs"),
  path = require("path");

var args = process.argv.slice(2);

if (args.length < 3) {
  console.error("Script arguments are not valid");
  console.error("usage: ");
  console.error("build-Index [source-file] [destination-dir] [file-name]");
  return;
}

var documents = require(path.join(process.cwd(), args[0]));
var destinationDir = args[1];
var documentsFileName = args[2];

var documentsWithId = {};

var idx = lunr(function() {
  this.ref("id");
  this.field("category");
  this.field("command");
  this.field("description");
  this.field("keywords");

  documents.forEach((item, index) => {
    item.id = index;
    const documentWithId = item;
    documentsWithId[index] = documentWithId;
    this.add(documentWithId);
  });
});

fs.writeFile(
  path.join(destinationDir, documentsFileName + ".json"),
  JSON.stringify(documentsWithId),
  function(err) {
    if (err) throw err;
    console.log("Documents were saved!");
  }
);

fs.writeFile(
  path.join(destinationDir, documentsFileName + "-index.json"),
  JSON.stringify(idx),
  function(err) {
    if (err) throw err;
    console.log("Index was saved!");
  }
);
