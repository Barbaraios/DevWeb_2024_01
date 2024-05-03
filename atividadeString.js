// Concatenar strings
let valor01 = 100;
const valor02 = 5;
console.log('A multiplicação de ' + valor01 +' por ' + valor02 + ' é ' + valor01 *
valor02 );
console.log(`A multiplicação de ${valor01} por ${valor02} é ${valor01 * valor02}`);

// Maiusculo e minúsculo
console.clear();
console.log("Banana" + ',' + ' ' + "Laranja" + ',' + ' ' + "Maracjá" + ',' + ' ' + "Abacate" + ',' + ' '+  "Uva")
const s = '';
console.log(s.toUpperCase());
console.log(s.toLowerCase());

//tamanho de string
console.clear();
let texto= 'Banana Laranja Maracjá Abacate Uva';

const str = 'Banana Laranja Maracjá Abacate Uva';
console.log(str.substring(1, 2, 3))
//saida esperada "Ban"

//remover espaços
console.clear();
let text = 'Banana Laranja Maracjá Abacate Uva'

//substituir string
//maiusculo e minúsculo
console.clear();
let mensagem = ' Venha comprar frutas '
console.log(mensagem)
let novaMensagem = mensagem.replace( 'comprar, frutas' );
console.log(novaMensagem);