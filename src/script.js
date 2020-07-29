
//Selecionar dentro do array uma palavra aleatória e atribui-la ao elemento HTML com id mainWord
function aleatoryWord() {                    

    const aleatoryWord = ['improvisar', 'rimar', 'asfalto', 'população', 'massacre', 'chacina', 'esquina', 
    'selvagem', 'atrocidade', 'visão', 'satisfação', 'importúnio', 'semelhança', 'raiz', 'fósforo', 'fogo', 
    'criança', 'adulto', 'idoso', 'creche', 'salário', 'caixa', 'beat', 'praia', 'salada', 'rodízio', 'bandeja', 
    'corrimão', 'espeto', 'faca', 'canivete', 'loucura', 'sensatez', 'alucinar', 'dormir', 'enterrar', 'sorte',
    'azar', 'cria', 'filhote', 'coiote', 'rap', 'rima', 'lixar', 'lixeira', 'pensamento', 'elemento', 'matagal', 
    'lixão', 'pimenta', 'peruca', 'príncipe', 'músico', 'California', 'Amsterdã', 'coroa', 'lacuna','contexto', 
    'holofote', 'computador', 'força', 'dread', 'ganja', 'alma', 'espírito', 'rugir', 'leão', 'juba', 'chuva', 
    'tempestade', 'raio', 'partir', 'respirar', 'oxigênio', 'tronco', 'terminal', 'luz','mundo', 'louco', 'resto', 
    'nojo', 'desgosto', 'sepultura', 'alienígena', 'nave  espacial', 'Marte', 'ringue', 'lesma', 'tsunami', 'suicída', 
    'largura', 'constante', 'mortal', 'mortífero', 'especial','roteiro', 'ator', 'truco', 'buraco', 'esgoto', 
    'apocalipse', 'lógica', 'planetário', 'continente', 'extremo', 'crocodilo', 'serpente', 'hiena', 'presa', 
    'floresta', 'inseto', 'verme', 'capuz', 'olho', 'mosaico', 'mosaico', 'fuga', 'alicate', 'biblioteca', 'lanterna', 
    'poço', 'luz', 'vacilo', 'alimento', 'sensato', 'cozinhar', 'casa', 'vazamento', 'súdito', 'rainha', 'realeza', 'formiga', 'fantasma']; 

    const randomWord = aleatoryWord[Math.floor(Math.random() * aleatoryWord.length)];

    document.getElementById("mainWord").innerHTML = randomWord;          

}    


//Exibir ou Sumir com container ao clicar
function onOff() {
    document
        .querySelector("#container2")
        .classList
        .toggle("hide")                       
}


//Mudar a cor do botão ao clicar (on/off)
function ChangeColor(){
    document
            .querySelector("button.fat")
            .classList
            .toggle("ChangeColor")    
}


//Faz a função ChangeColor já começar ativa, ou seja, com botão cinza
document
    .querySelector("button.fat")
    .addEventListener("click", ChangeColor())                
 

//Faz a função onOff já começar ativa, ou seja, com o container contraido
document
    .querySelector("button.fat")
    .addEventListener("click", onOff())             







