function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'caminhadas no bairro',
    grande: 'correr no parque'
  };
  return atividades[porte];
}

async function buscarDadoAsync() {
  return new Promise(resolve => {
    setTimeout(() => resolve('Pipoca'), 100);
  });
}

export  {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};