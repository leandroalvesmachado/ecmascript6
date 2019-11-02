class Pessoa {
    // es6 não precisa declarar as variaveis
    // Ex: private nome

    constructor(nome, altura, sexo) {
        this.nome = nome;
        this._altura = altura;
        this.sexo = sexo;
    }

    // criando metodo
    getAltura() {
        return this._altura;
    }

    // metodo get, encapsulamento
    get altura() {
        return this._altura;
    }

    // metodo set
    set altura(value) {
        this._altura = value;
    }
}

const pessoa = new Pessoa('luiz carlos', '1.88', 'M');

// Pessoa {nome: "luiz calors", altura: "1.88", sexo: "M"}
console.log(pessoa);

// luiz carlos
console.log(pessoa.nome);

// 1.88
console.log(pessoa.getAltura());

// nesse caso chama o get altura()
console.log(pessoa.altura);