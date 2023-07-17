"use strict";
class cliente {
    constructor(nome, idade, id) {
        this.nome = nome;
        this.idade = idade;
        this.id = id;
    }
};

// OU 

class NovoEmail {
    constructor(nome, email, idade, id) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.id = id;
    }
}
const EmailNovo = new NovoEmail("Peter", "Peter@gmail.com", 18, 1);

// HERANÇA
class NovoHotmail extends NovoEmail {
    constructor() {
        super("Carol", "Carol@hotmail.com", 18, 2);
    }
}
