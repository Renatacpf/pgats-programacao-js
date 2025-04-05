/**
 * Console API
 */

console.log("Aula inicial JS")
console.error("Falha na execução")
console.warn("Atenção")
console.table([{
    nome: 'Renata',
    turma: 'B2',
    disciplina: 'Prog JS'
},
{
    nome: 'Lucas',
    turma: 'B2',
    disciplina: "Prog JS"
}])

/**
 * Constantes e variáveis
 */

// const - para insformações que nunca mudam
// var ou let - para informações que podem mudar

// informacoes de um dog que nao mudam
const nome = 'Loki'
const raca = 'SRD / vira lata'
const sexo = 'Macho'
const cor = 'Caramelo'
const dataDeNascimento = '01/01/2024'
const porte = 'M'

// informacoes que mudam
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = 'M'

/**
 * Tipos de Dados - cadeia, inteiro, real, logico, vetor, matriz
 * 
 * String - cadeia
 * Number - inteiro/real
 * Boolean - Logico
 * Array - vetor/matriz
 * 
 * undefined
 * null
 * BigInt = Number para números extremamente grandes
 * Symbol = 'identificador único'
 */

const valor = "50"
console.log(valor)

console.log("5" + 1)

/**
 * Strings
 */

// 'Turma 02 do PGATS' - aspas simples ou singe quote
// "Turma 02 do PGATS" - aspas duplas ou double quote
// `Turma 02 do PGATS` - template strings

const numeroAula = "03"
const turma = "02"
let data = "05 de Abril"

console.log("Aula 03 da Turma " + turma + " no Sábado dia 05 de Abril") // Concatenação de strings

console.log(`Aula ${ numeroAula } da Turma ${ turma } no Sábado dia ${ data }`) // Interpolação de strings

console.log(numeroAula.length) // length -  propriedade usada para obter o tamanho de algo — geralmente o número de elementos em uma estrutura, como arrays, strings ou objetos parecidos com listas.

console.log(data.length)

// split - separar a string

const nomesDeAlunos = "Giuliana André Goku Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ") // é um método de string que divide uma string em partes, com base em um separador, e retorna essas partes em um array.

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase()) // toLowerCase() - converte todos os caracteres da string para minúsculas.
console.log(nomesDeAlunos.toUpperCase()) // toUpperCase() - converte todos os caracteres da string para maiúsculas.

console.log(nomesDeAlunos.includes("André")) // includes - é um método usado com strings e arrays para verificar se um valor específico está presente. Ele retorna true se encontrar, e false se não.
console.log(nomesDeAlunos.includes("Renata"))

// Cahi - biblioteca de asserções

console.log(nomesDeAlunos.replace('a', 'i')) // replace() - Substitui a primeira ocorrência de uma substring por outra.
console.log(nomesDeAlunos.replaceAll('a', 'i')) // replaceAll() - Substitui todas as ocorrências da substring por outra.

const conceiosLogica = "                  inteiro real cadeia de caracteres...      "

console.log(conceiosLogica.trim()) // trim() - é um método de string que remove os espaços em branco do começo e do fim da string.

// slice() - super útil pra cortar partes de uma string ou array, retorna uma parte de uma string ou array, sem modificar o original.

let dataParaCortar = "05 de Abril"
const cpf = "06122984698"

console.log(dataParaCortar.slice(0, 2)) //0: índice onde começa o corte (inclusivo). / 2 (opcional): índice onde termina o corte (exclusivo).
console.log(dataParaCortar.substring(0, 3)) // substring() é um método usado com strings para extrair uma parte do texto, com base em dois índices: o início e o fim (exclusivo).

// charAt() - retorna o caractere localizado em um índice específico dentro de uma string.