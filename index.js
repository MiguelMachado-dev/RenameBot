const path = require("path");
const fs = require("fs");

// Importando lista de produtos
const Items = require("./docs/localization.json");

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
    console.log(file);

    // Regex para obter do nome do arquivo, apenas a referencia
    const rgx = /[A-z]{2}[0-9]{3,}/;

    // armazenando referencia do nome dos arquivos
    const nameRgx = file.match(rgx);

    // Buscando dentro do json alguma entrada que possua a referencia do nome da foto
    let filteredItems = Items.planilha.filter(result =>
      result["Nome"].includes(nameRgx[0])
    );

    if (nameRgx === null) {
      return console.log("shuting down bot...");
    }

    /**
     * Caso o arquivo não seja encontrado no .json o script irá mover a foto para outro dir
     */
    if (filteredItems[0] === undefined) {
      console.log("----------------------------------------------------------");
      console.log("Arquivo não localizado na planilha: ", nameRgx[0]); // Aqui exibe a referencia do arquivo não encontrado

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/naoEncontrado/${file}`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      return console.log(
        "----------------------------------------------------------"
      );
    }

    // Armazenando nome do produto buscado dentro do json
    const NameFilter = filteredItems[0].Nome;
    // Armazenando código do produto buscado dentro do json
    const code = filteredItems[0].Código;
    // Agora o nome dos arquivos serão code.NameFilter

    /**
     * @description
     * A partir daqui começa a verificar se o nome do arquivo tem variação além da referência para
     * que se mantenha essa variação. Isto é: Se o arquivo se chamava AB1234 -1.png ele deverá se
     * chamar após isso code.NameFilter-1.png
     */

    // Verificando se o arquivo verificado tem "-1" no nome
    if (file.match(/[-][1]/)) {
      const newName = `${code}.${NameFilter}-1`;

      // retorna: "./images/nomedafoto.png"
      const oldPathWithExt = `${directoryPath}/${file}`;
      // retorna: "./images/renomeada/NUMBER.nomedafoto.png"
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem "-2" no nome
    if (file.match(/[-][2]/)) {
      const newName = `${code}.${NameFilter}-2`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem "-3" no nome
    if (file.match(/[-][3]/)) {
      const newName = `${code}.${NameFilter}-3`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem "-4" no nome
    if (file.match(/[-][4]/)) {
      const newName = `${code}.${NameFilter}-4`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem " (1)" no nome
    if (file.match(/[ ][(][1][)]/)) {
      const newName = `${code}.${NameFilter}-1`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem " (2)" no nome
    if (file.match(/[ ][(][2][)]/)) {
      const newName = `${code}.${NameFilter}-2`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem " (3)" no nome
    if (file.match(/[ ][(][3][)]/)) {
      const newName = `${code}.${NameFilter}-3`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // Verificando se o arquivo verificado tem " (4)" no nome
    if (file.match(/[ ][(][4][)]/)) {
      const newName = `${code}.${NameFilter}-4`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }

    // para pegar nomes sem variações
    if (
      !file.match(/[ ][(][4][)]/) &&
      !file.match(/[ ][(][3][)]/) &&
      !file.match(/[ ][(][2][)]/) &&
      !file.match(/[ ][(][1][)]/) &&
      !file.match(/[-][4]/) &&
      !file.match(/[-][3]/) &&
      !file.match(/[-][2]/) &&
      !file.match(/[-][1]/)
    ) {
      const newName = `${code}.${NameFilter}-1`;

      const oldPathWithExt = `${directoryPath}/${file}`;
      const newPathWithExt = `${directoryPath}/renomeada/${newName}.png`;

      fs.renameSync(oldPathWithExt, newPathWithExt, function(err) {
        if (err) console.log("ERROR: " + err);
      });

      console.log("[NOVO NOME]", newName);
    }
  });
});
