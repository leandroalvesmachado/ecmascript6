// default parameter sempre no final
// parametros obrigatorios sempre no inicio
function test(param1, param2 = 'padrao') {
    console.log(param1);
    console.log(param2);
}

// funciona, pois o valor param2 ja tem valor default
test('valor');