let first_name = "leandro", last_name = "alves";

let obj = {
    first_name: first_name,
    last_name: last_name
};

console.log(obj);

// shortland
let obj = {
    first_name,
    last_name,
    method(param1, param2) {

    },

};

// passando objeto ja como parametro
function funcao({first_name, last_name}) {
    console.log(first_name);
    console.log(last_name);
}
