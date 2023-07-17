"use strict";
//Boolean
const contaPaga = true;

//Number
const numero = 10;

//String
const Nome = "Peter Abenza";

//Array
const listaNomes = ["Peter", "Carol", "Brutos", "Gordo"];

//Tuple
let listaNomes2;
listaNomes2 = ["Peter", "Carol", true, 2];

//Enum
var statusReputacao;
(function (statusReputacao) {
    statusReputacao[statusReputacao["aprovado"] = 0] = "aprovado";
    statusReputacao[statusReputacao["cuspido"] = 1] = "cuspido";
    statusReputacao[statusReputacao["lixoso"] = 2] = "lixoso";
    statusReputacao[statusReputacao["maravilhoso"] = 3] = "maravilhoso";
    statusReputacao[statusReputacao["daora"] = 4] = "daora";
    statusReputacao[statusReputacao["maneiro"] = 5] = "maneiro";
})(statusReputacao || (statusReputacao = {}));;
const Status = statusReputacao.maravilhoso;

//Eny: qualquer coisa
const numer = 10;
const txt = "oi";
const booleann = true;
const seila = ["Peter", "Carol", true, 2];

//Void: função que não retorna nada 
function msg(msg) {
    console.log(msg);
};

//null e underfined
const underfined = undefined;
const Null = null;

//Object
function criar(Object) { };
criar({
    teste: "Hello Word"
});

//Never:nunca termina 
function error(mensagem) {
    throw new Error(mensagem);
};

// Union types
function notaAluno(nota) {
    console.log("Sua nota é" + nota);
};
notaAluno(10);
notaAluno("Hello Word");
notaAluno(true);
const gamer = [{
        nome: "Peter",
        id: "898Dhsk",
        jogo: "CounterStrike"
    },
    {
        nome: "Abenza",
        id: "8U8D2lA",
        jogo: "Minecarft"
    }];
function CriacaoGamers(gamerss) {
    for (let gamerss of gamer) {
        console.log(gamerss);
    }
};

//Assertion
const ab = 2;
ab.toString();
