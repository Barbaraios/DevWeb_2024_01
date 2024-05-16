 JavaScript:

// Criando o array de objetos com os funcionários
let funcionarios = [
  { nome: 'Wally', salario: 4800 },
  { nome: 'Alice', salario: 5200 },
  { nome: 'Bob', salario: 4500 },
  { nome: 'Carol', salario: 5100 },
  { nome: 'Dave', salario: 4900 }
];

// Listando nome e salário de todos os funcionários
console.log("Lista de funcionários e salários antes do reajuste:");
funcionarios.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

// Aplicando reajuste de 5% a todos os funcionários
funcionarios = funcionarios.map(funcionario => {
  return { nome: funcionario.nome, salario: funcionario.salario * 1.05 };
});

// Filtrando funcionários que recebem mais de 5000
let funcionariosMaisDe5000 = funcionarios.filter(funcionario => funcionario.salario > 5000);

console.log("Lista de funcionários que recebem mais de R$ 5000 após o reajuste:");
funcionariosMaisDe5000.forEach(funcionario => {
  console.log(`${funcionario.nome}: R$ ${funcionario.salario.toFixed(2)}`);
});

// Pesquisando se o funcionário Wally ainda está no array
let encontrouWally = funcionarios.find(funcionario => funcionario.nome === 'Wally');

console.log("Você encontrou o Wally?");
console.log(encontrouWally ? "true" : "false");




