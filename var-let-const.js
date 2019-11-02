// VAR vs LET vs CONST

// var - possivel redeclarar a variavel
// var - acessivel fora do escopo (bloco) quando declarada, problema de consumo de memoria tambem

function test() {
    //possivel tambem, pois com o var é possível redeclarar variaveis
    var a = 'a';
    if (1 < 2) {
        var a = 'valor';
    }

    //acessivel, foi usado o var
    console.log(a);
}

// let - não é possível redeclarar a variável
// let - variável acessível somente dentro do escopo quando declarada (bloco)
// let - melhor usar o let do que o var (boas praticas de programação)

function test() {

    let a = 'a';
    if (1 < 2) {
        // erro, pois nao é possivel redeclarar variaveis com o let
        //
        let a = 'valor';
        // funciona somente dentro do bloco
        console.log(a);
    }

    // erro - pois foi usado o let para declarar, variavel declarada dentro do escopo IF
    // acessivel somente dentro do bloco IF
    console.log(a);
}

// const - não é possível atribuir novamente valor a variável

// erro, não pode atribuir novo valor depois de criado
const a = 1;
a = 2;

// erro, não pode atribuir novo valor depois de criado
const obj = {name: 'valor'};
obj = 'a';
// assim funciona
obj.name = 'valor';