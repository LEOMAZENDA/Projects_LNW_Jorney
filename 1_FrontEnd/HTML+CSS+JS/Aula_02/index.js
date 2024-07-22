//Bibliotecas externas 

const formatador = (data) =>{
  console.log(dayjs(data).formatador('dd'))
}

formatador(new Date('2024-04-01')) 

// objeto atividade
const atividade = {
  nome: "Almoço",
  dataAlmoco: new Date("2024-07-08 10:00"),
  finalizada: true
}
 
//Criando a lista de actividades
let atividades = [
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

// atividades = []

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

const actualizarListaActividades = () =>{
  const section = document.querySelector('section');

  if(atividades.length == 0){
    section.innerHTML = `<p>Sem actividades registadas de momento</p>`
    return
  }

  for(let atividade of atividades ) {
    section.innerHTML += criarItenDeAtividade(atividade);
  }
}

actualizarListaActividades()