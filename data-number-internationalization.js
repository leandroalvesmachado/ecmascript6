// api Intl

let date = new Date();

// 2019-9-26, errado deveria vir 26/09/2019
console.log(new Intl.DateTimeFormat('pt-BR').format(date));

// 9/26/2019
console.log(new Intl.DateTimeFormat('en-US').format(date));

// erro, deveria vir o mês 'setembro'
console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long'}).format(date));

// 2019 M09 26
console.log(new Intl.DateTimeFormat('pt-BR', {month: 'long', day: 'numeric', year: 'numeric'}).format(date));

// 2.22 teria que vir 2,22
console.log(new Intl.NumberFormat('pt-BR').format(2.22));

// 2,000.22
console.log(new Intl.NumberFormat('pt-BR').format(2000.22));

// 2,000
console.log(new Intl.NumberFormat('pt-BR').format(2000));

// 2,000.00
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000));

// 2,000.20
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000.2));

// 2,000.00R$ 2,000.33

console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2}).format(2000));

// 2,000.33
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(2000.3333333333));

// EUR = € 2,000.33
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'EUR', style: 'currency'}).format(2000.3333333333));

// R$ 2,000.33
console.log(new Intl.NumberFormat('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2, currency: 'BRL', style: 'currency'}).format(2000.3333333333));






