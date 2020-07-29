

//FUNCTION PARA LER ARQUIVO E RETORNAR ALEATORIAMENTE UMA PALAVRA
    function aleatoryWord() {
        var fs = require('fs');

        var textByLine = fs.readFileSync('./src/texto.txt');

        const aleatoryWord = textByLine.toString().split(',');

        const randomWord = aleatoryWord[Math.floor(Math.random() * aleatoryWord.length)];

        return randomWord;
    }


    b = aleatoryWord();

    console.log(b);



//======================================================================================
//======================================================================================
/*  

//built-in Module or in-built library in NodeJs which handles all the reading operations
var fs = require('fs');

//lê o arquivo e salva num array (data)
fs.readFile('./src/texto.txt', 'utf-8', (err, data) => {
   
    //divide o array a cada virgula encontrada e salva num array
    const aleatoryWord = data.split(',');

    //escolhe um valor aleatório de um array
    const randonWord = aleatoryWord[Math.floor(Math.random() * aleatoryWord.length)];

    //mostra no console a variavel randonWord
    console.log(randonWord);
});



//console.log('A primeira palavra é:' + arrayOfStrings[0]);
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
//https://www.geeksforgeeks.org/javascript-program-to-read-text-file/

*/