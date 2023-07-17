class cliente {
    nome: string
    idade: number
    id: number

    constructor(nome: string, idade: number, id: number){
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }
};

// OU 

class NovoEmail {
    constructor(public nome: string, public email: string, public idade: number, public id: number){}
}

  const EmailNovo = new NovoEmail("Peter", "Peter@gmail.com", 18, 1);

// HERANÇA

class NovoHotmail extends NovoEmail {
    constructor(){
        super("Carol", "Carol@hotmail.com", 18, 2)
    }
}