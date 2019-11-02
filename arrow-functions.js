// funcoes flecha
let array = [1, 2, 3, 4, 5, 6];

// return explicito
let arrayMap1 = array.map(function (value) {
    return value * 10;
});

// [10, 20, 30, 40, 50, 60]
console.log(arrayMap1);

// melhor forma, mais simplificada, return implicito
let arrayMap2 = array.map(value => value * 10);

// [10, 20, 30, 40, 50, 60]
console.log(arrayMap2);

// melhor forma, mais simplificada, com indice
let arrayMap3 = array.map((value, index) => value * 10);

// [10, 20, 30, 40, 50, 60]
console.log(arrayMap3);

// return explicito, se precisar usar o indice
let arrayMap4 = array.map((value, index) => {
    return value * 10;
});


// melhor forma, mais simplificada, usando ternario
let arrayMap5 = array.map(value => value > 10 ? 0 : 2);

// [2, 2, 2, 2, 2, 2]
console.log(arrayMap5);

let funcaoSoma = (param1, param2) => param1 + param2;

setTimeout(() => execucao, 100);
setInterval(() => execucao, 100);
