function funcao(param1, param2) {
    var args = Array.prototype.slice.call(arguments, funcao.length);

    // param1 = 1
    // param2 = 2
    // args = [3, 4, 5, 6]
    console.log(args);
}

function funcaoComVariosParametros(param1, param2, ...restParams) {
    // param1 = 1
    // param2 = 2
    // restParams = [3, 4, 5, 6]
    console.log(restParams);
}

funcao(1, 2, 3, 4, 5, 6);

funcaoComVariosParametros(1, 2, 3, 4, 5, 6);

let array1 = [1, 2, 3, 4];
// isso ai ja concatenou o array, mais simples
let array2 = [5, 6, 7, 8, ...array1];

// [5, 6, 7, 8, 1, 2, 3, 4]
console.log(array2);

let string = "leandro";
let stringArray = [...string];

// ["l", "e", "a", "n", "d", "r", "o"]
console.log(stringArray);
