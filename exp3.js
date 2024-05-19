function nomeCompleto(nome, sobrenome){
    const nomeUser = `${nome} ${sobrenome}`
    return nomeUser
}

const imprimir = nomeCompleto(`Caio`, `o Brabo`)

console.log(imprimir);

function verifyIdade(idade){
    if (idade <= 17){
        return 'De menor'
    } else {
        return 'De maior'
    }
}

//arrow  function

const verificaIdade = (idade) => {
    if (idade <= 17){
        return 'De menor'
    } else {
        return 'De maior'
    }
}

console.log(verificaIdade(19));