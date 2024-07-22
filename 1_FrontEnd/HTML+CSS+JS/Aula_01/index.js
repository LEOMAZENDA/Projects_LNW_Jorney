

// objeto atividade
const atividade = {
  nome: "Almoço",
  dataAlmoco: new Date("2024-07-08 10:00"),
  finalizada: true
}

const atividades = [
atividade,
{
  nome: "Academina em grupo",
  dataAlmoco: new Date("2024-07-09 13:00"),
  finalizada: false
},
{
  nome: "Gamming session",
  dataAlmoco: new Date("2024-07-12 20:30"),
  finalizada: true
},
]


// função arrow criarItensAtividade
const criarItenDeAtividade = (atividade) => {
  
  let input = '<input type="checkbox" ';

  if (atividade.finalizada) {
    input += 'checked';
  }

  input = input + '>';

  return `
    <div>
      ${input}
      <span>${atividade.nome}</span>
      <time>${atividade.dataAlmoco}</time>
    </div>
 `;
}

const section = document.querySelector('section');

for(let atividade of atividades ) {
  section.innerHTML += criarItenDeAtividade(atividade);
}

