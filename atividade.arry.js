// Array de objetos 'alunos' com 8 propriedades cada
console.clear();
const alunos = [
    {
        nome: "Maria",
        idade: 18,
        notas: [8, 7, 9],
        endereco: {
            rua: "Rua A",
            numero: 123,
            cidade: "Cidade X"
        }
    },
    {
        nome: "João",
        idade: 20,
        notas: [6, 5, 7],
        endereco: {
            rua: "Rua B",
            numero: 456,
            cidade: "Cidade Y"
        }
    },
    {
        nome: "Ana",
        idade: 19,
        notas: [7, 8, 6],
        endereco: {
            rua: "Rua C",
            numero: 789,
            cidade: "Cidade Z"
        }
    }
];

// Função para calcular a média das notas
function calcularMedia(notas) {
    const total = notas.reduce((acc, nota) => acc + nota, 0);
    return total / notas.length;
}

// Iterando sobre cada aluno para exibir as informações
alunos.forEach(aluno => {
    const media = calcularMedia(aluno.notas);
    const situacao = media >= 7 ? "aprovado(a)" : "reprovado(a)";
    console.log(`Aluno(a) ${aluno.nome} com notas ${aluno.notas.join(", ")} mora na ${aluno.endereco.rua}, ${aluno.endereco.numero}, ${aluno.endereco.cidade} e teve a média ${media}, portanto foi ${situacao}.`);
});

