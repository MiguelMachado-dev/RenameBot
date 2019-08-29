const path = require("path");
const fs = require("fs");

// Diretório que contém as imagens
const directoryPath = path.join(__dirname, "images");

// Lendo o diretório das imagens
fs.readdir(directoryPath, function(err, files) {
  // lidando com erros
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }

  // Listando todos os arquivos com forEach
  files.forEach(function(file) {
    // Regex para obter do nome do arquivo apenas a referencia
    const rgx = /[A-z]{2}[0-9]{3,}/;

    // Se o arquivo não bater com o regex, isto é, não ter referencia, ele será movido para uma outra pasta
    if (!file.match(rgx)) {
      console.log(file);

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/semReferencia/${file}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });
    }
  });
});
