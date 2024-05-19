const dados = {
    nome: "Caio",
    idade: 20,
    profissao: "Milico",
    altura: 2
}

function apresentar(dadosU){
    console.log(`Meu nome é ${dadosU.nome}, tenho ${dadosU.idade} anos, sou ${dadosU.profissao} e minha altura é ${dadosU.altura} metros.`)
}

apresentar(dados)