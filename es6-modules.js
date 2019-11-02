// para usar modules, precisa de um servidor web, ex: nodejs, apache

// export para pode usar no html
export class Pessoa {
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

// exportavel, entao a view html consegue acessar
export const valor = 'leandro';
