var text = readFileSync('./src/texto.txt')






// FUNCTION PARA LER ARQUIVO E RETORNAR ALEATORIAMENTE UMA PALAVRA
function Ale() {
    var fs = require('fs');

    var textByLine = fs.readFileSync('./src/texto.txt');

    const aleatoryWord = textByLine.toString().split(',');

    const randomWord = aleatoryWord[Math.floor(Math.random() * aleatoryWord.length)];

    return randomWord;
  }


  b = Ale();

  console.log(b);