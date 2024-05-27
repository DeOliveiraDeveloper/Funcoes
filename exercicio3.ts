type TFuncCalc = (num1:number, num2:number) => number

type TCalculadora = {
    soma: TFuncCalc
    subt: TFuncCalc
    divisao: TFuncCalc
    multi: TFuncCalc
}

const calculadora: TCalculadora = {
    soma: function (num1:number, num2:number): number{
        return num1 + num2
    },
    divisao: function (num1:number, num2:number): number{
        return num1 / num2
    },
    subt: function (num1:number, num2:number): number{
        return num1 - num2
    },
    multi: function (num1: number, num2:number): number{
        return num1 * num2
    }
}

console.log(calculadora.soma(5,5));
console.log(calculadora.divisao(5,5));
console.log(calculadora.subt(5,5));
console.log(calculadora.multi(5,5));
