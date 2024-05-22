// Método querySelector
let paragrafo = document.querySelector('p');
paragrafo.style.background = '#0eaeab';


// Busca a tag e a classe
let parClasse = (document.querySelector('p.exemplo').innerHTML ='Mudei o texto aqui');


// Busca somente a classe
let elemento = (document.querySelector('.myclass').style.fontSize = 'x-large');


// Função chamada pelo evento onclick
const Clique = () => {
    document.querySelector('#my-span').style.backgroundColor = '#f95842';
    };


    // Método querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
listaLi[i].style.border = '1px solid #d6aa26';
listaLi[i].style.padding = '3px';
}
console.log(listaLi);


// Busca por id
let myLi = document.querySelectorAll('#my-li');
myLi.forEach((li) => (li.innerHTML = 'Mudou aqui!'));

// Busca por classe
let myItem = document.querySelectorAll('.item');
myItem.forEach((item) => (item.style.backgroundColor = '#ffcc7a'));


// Busca por elemento e classe
let myTeste = document.querySelectorAll('li.teste');
myTeste.forEach((elemento) => (elemento.style.color = '#ff9d2e'));
