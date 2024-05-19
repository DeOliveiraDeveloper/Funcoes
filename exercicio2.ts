function faixaEtaria(idade){
    if (idade <= 21){
        return "Jovem";
    } else if (idade <= 65){
        return "Adulto"
    } else {
        return "Idoso"
    }
}

console.log(faixaEtaria(1000));

//com Arrow function

const faixaEtariaArrow = (idade) =>{
    if (idade <= 21){
        return "Jovem";
    } else if (idade <= 65){
        return "Adulto"
    } else {
        return "Idoso"
    }
}

console.log(faixaEtariaArrow(100));