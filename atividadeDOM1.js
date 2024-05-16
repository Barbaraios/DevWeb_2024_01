// Alterar o título
document.title = 123;
// Criar um elemento <h1>
let heading = document.createElement('H1');
heading.innerHTML = 'Olá alunos!';
document.title.appendChild(heading);
heading.style.borderBottom = 'solid 3px #000';