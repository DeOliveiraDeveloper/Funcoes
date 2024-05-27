type TUser = {
    nome: string
    idade: number
    genero: string
}

const users: TUser[] = []

function cadastrarUsers(usuario: TUser) {
    users[users.length] = {
        nome: usuario.nome, 
        idade: usuario.idade, 
        genero: usuario.genero
    }
}