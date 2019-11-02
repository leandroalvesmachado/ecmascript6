let array = [1, 2, 3, 4, 5, 6];

// in ou of somente em array, objeto não funciona, 
// só se for um array de objetos
for (let i in array) {
    //console.log(i, array[i]);
    // i = indice, array[posicao]
    // i = 0, array[0] = 1
    // i = 1, array[0] = 2
    // i = 2, array[0] = 3
    // ...
    // i = 5, array[0] = 6
}

for (let i of array) {
    //console.log(i);
    // i = valor
    // i = 1
    // i = 2
    // ..
    // i = 6
}


let obj = {
    first_name: 'luiz',
    last_name: 'carlos'
};

for (let i in obj) {
    //console.log(i, obj[i]);
    // i = indice, obj[i] = valor
    // i = first_name, obj[first_name] = luiz
    // i = last_name, obj[last_name] = carlos
}

// array de objetos, usar for of, melhor
let array_obj = [
    {},
    {},
    {}
];

for (let obj of array_obj) {
    // console.log(obj);
    // obj = {}
}

// utilizando indice e valor
for (let [index, value] of array_obj.entries()) {
    console.log(index, value);
    // index = indice, value = objeto
}