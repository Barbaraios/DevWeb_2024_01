


// Eventos
console.clear();
const boasVindas = () => {
alert('Bem vindo a nossa página');
console.log('Bem vindo a nossa página');
};
const eventClique = () => {
console.log('Você clicou no botão');
};
const mouseEmCima = () => {
console.log('Mouse está em cima do título');
};


console.clear();
//classes
class Carro{
    constructor(nome, ano){
        this.nome= nome;
        this.ano= ano;
    }
}

//intanciando objetos á classes 
let meuCarro1= new Carro('Ford', 2014);
let meuCarro2= new Carro('Audi', 2019);
//imprimido valores
console.log(meuCarro1.nome);
console.log(meuCarro2.ano);

//declarar nova classe com métodos  
console.clear();
class novoCarro{
    constructor(nome, ano){
        this.nome= nome;
        this.ano= ano;
    }
    idadeCarro(ano){
        return ano- this.ano;
    }
}
//Buscando ano atual automaticamente
let dataHoje =new Date();
let ano= dataHoje.getFullyer();
//console.log(dataHoje);

//Intanciando o objeto á classe 
let meuNovoCarro= new novoCarro('ford', 2014);
console.log(meuNovoCarro.idadeCarro(ano));