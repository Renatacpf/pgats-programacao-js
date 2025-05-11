function geradorDeTagsDeIdentificacao(nome) {
  const nomeFormatado = nome.trim().toUpperCase()

  return nomeFormatado
}

function verificarSePodeSerAdotado(idade, porte) {
  const portesValidos = ['P', 'M', 'G']

  if (typeof idade !== 'number' || idade <= 0) {
    throw new Error('Idade inválida. Esperado: número maior que 0.')
  }

  if (!portesValidos.includes(porte)) {
    throw new Error(`Porte inválido. Use um dos seguintes: ${portesValidos.join(', ')}`)
  }

  const podeAdotar = idade === 1 && porte === 'M'
  return podeAdotar
}

function calcularConsumoDeRacao(nome, idade, peso) {
  const gramasPorDia = 300
  const consumoTotal = peso * gramasPorDia

  return Math.round(consumoTotal);
}

function decidirTipoDeAtividadePorPorte(porte) {
  let atividade
  const portesValidos = ['pequeno', 'médio', 'grande']

  if (!portesValidos.includes(porte)) {
    throw new Error(`Porte inválido. Use um dos seguintes: ${portesValidos.join(', ')}`)
  }

  switch (porte) {
    case 'pequeno':
      atividade = `brincar dentro de casa`
      break
    case 'médio':
      atividade = `caminhada no quarteirão`
      break
    case 'grande':
      atividade = `correr no parque`
      break
    default:
      atividade = `porte inválido`
  }
  return atividade;
}

async function buscarDadoAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};