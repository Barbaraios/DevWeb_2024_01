// Método querySelector
let paragrafo2 = document.querySelector('p');
paragrafo2.style.backgroundColor = '#fc5956';

// Função chamada pelo evento onclick
const Clique2 = () => {
    document.querySelector('#my-span').style.backgroundColor = '#fc5956';
    };

    // Método querySelectorAll
let listaLi = document.querySelectorAll('li');
for (i = 0; i < listaLi.length; i++) {
listaLi[i].style.border = '1px solid #fc5956';
listaLi[i].style.padding = '3px';
}
console.log(listaLi);