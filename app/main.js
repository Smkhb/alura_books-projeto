let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI(){
    const res = await fetch(endpointDaAPI);
    let livros =  await res.json();
    livros = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);
}

