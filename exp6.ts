// function soma(num1: number, num2: number): number{
//     return num1 + num2
// }

// const funcNaVar = soma 

// console.log(funcNaVar(5,15));


const pessoa = {
    nome: "Caio",
    sobrenome: "o Lendário",
    nomeCompleto: function(){
        console.log(`${pessoa.nome} ${pessoa.sobrenome}`);
        
    }
}

const pessoa2 = {
    nome: "Caio",
    sobrenome: "o Brabo",
    nomeCompleto: function(){
        console.log(`${this.nome} ${this.sobrenome}`);
        
    }
}

pessoa2.nomeCompleto()