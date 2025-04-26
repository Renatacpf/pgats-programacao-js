/*
--  decremento
++  incremento
?   ternário
*/

// ++  incremento
let pesoDog = 10
console.log(pesoDog)

pesoDog++
console.log(pesoDog)

// --  decremento
let pesoDoTutor = 100
console.log(pesoDoTutor)

pesoDoTutor--
console.log(pesoDoTutor)

// ?   ternário
{/*<condicao> ? <acao se verdadeiro> : <acao se falso>*/}
const porte = pesoDog <= 10 ? 'pequeno' : 'médio'
//            <condicao>       se          senao

const pesoDoDogOperadorTernario = 21
const porteDogTernario =    pesoDoDogOperadorTernario <= 10 // se
                            ? 'pequeno'
                            : pesoDoDogOperadorTernario <=20    // senao se
                            ? 'médio'
                            : 'grande'  // senao
console.log(porteDogTernario)
