const users = []

// function cadastrarUsers(nome, idade, genero) {
//     users[users.length] = {
//         nome, idade, genero
//     }
// }

function cadastrarUsers(usuario) {
    users[users.length] = {
        nome: usuario.nome, 
        idade: usuario.idade, 
        genero: usuario.genero
    }
}

cadastrarUsers('Caio', 20,'Muito Macho')


//tem que chamar a variável e não á função
console.log(users)

cadastrarUsers('De Oliveira', 20,'Muito Macho')

console.log(users)