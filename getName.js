const path = require("path");
const fs = require("fs");

// Criando const para entrar na pasta que está as imagens
const directoryPath = path.join(__dirname, "docs");

/**
 * Get FileName
 * @description Função entra na pasta determinada e pegar o nome de cada arquivo
 * @author         Miguel Machado Pacheco
 * @returns        {string}
 */

module.exports = {
  // passing directoryPath and callback function
  primaryFunc: fs.readdir(directoryPath, function(err, files) {
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function(file) {
      const [name] = file.split(".");
      console.log(name);
    });
  })
};
