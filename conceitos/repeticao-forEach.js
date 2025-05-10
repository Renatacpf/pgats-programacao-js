/*

listaDeAlunos
Matheus
Renata
Leandro
Ana
Lucas

paraCada (item da) listaDeAlunos
    // dar um nota aleatoria
*/

const listaDeAlunos = ['Matheus', 'Renata', 'Leandro', 'Ana', 'Lucas']
const listaDeNotas = []

listaDeAlunos.forEach(aluno => {
    console.log(`Dando nota para ${aluno}`)
})

const listaDeAlunosENotas = [
    { nome: 'Matheus', nota: 10 },
    { nome: 'Renata', nota: 9 },
    { nome: 'Leandro', nota: 8 },
    { nome: 'Ana', nota: 7 },
    { nome: 'Lucas', nota: notaDoLucas() }
]

function notaDoLucas(){
    return 1;
}

console.log(`--------------------------------`)

listaDeAlunosENotas.forEach(aluno => {
    if (aluno.nota < 7) {
        console.log(`O aluno ${aluno.nome} precisa do trabalho extra`)
        console.log(`A nota do aluno ${aluno.nome} é ${aluno.nota}`)
    }
})
