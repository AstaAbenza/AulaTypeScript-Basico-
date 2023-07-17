//Boolean
const contaPaga: boolean = true; 

//Number
const numero: number = 10; 

//String
const Nome: string = "Peter Abenza"; 

//Array
const listaNomes: string[] = ["Peter", "Carol", "Brutos", "Gordo"]

//Tuple
let listaNomes2: [string, string, boolean, number];
listaNomes2 = ["Peter", "Carol", true, 2];

//Enum
enum statusReputacao {
    aprovado,
    cuspido,
    lixoso,
    maravilhoso,
    daora,
    maneiro
};

const Status: statusReputacao = statusReputacao.maravilhoso;

//Eny: qualquer coisa
const numer: any = 10; 
const txt: any = "oi"; 
const booleann: any = true; 
const seila: any[] = ["Peter", "Carol", true, 2]; 

//Void: função que não retorna nada 
function msg(msg: string):void {
    console.log(msg)
};

//null e underfined
const underfined: undefined = undefined;
const Null: null = null;

//Object
function criar(Object: object){};
criar({
    teste: "Hello Word"
});

//Never: nunca termina 
function error(mensagem: string): never {
    throw new Error(mensagem);
};

// Union types
function notaAluno(nota: number | string | boolean) {
    console.log("Sua nota é" + nota);
};

notaAluno(10);
notaAluno("Hello Word");
notaAluno(true);

// Alias
type gamers = {
    nome: string
    id: string
    jogo: string
};

const gamer: gamers[] = [{
    nome: "Peter",
    id: "898Dhsk",
    jogo: "CounterStrike"
},
{
    nome: "Abenza",
    id: "8U8D2lA",
    jogo: "Minecarft"
}];

function CriacaoGamers(gamerss: gamers) {
    for(let gamerss of gamer) {
        console.log(gamerss)
    }
};

//Assertion
const ab: any = 2;
(ab as number).toString()



