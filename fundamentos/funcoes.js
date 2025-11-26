/**
 *  Estudo das funções
 *  @author Gustavo Vieira de Souto
 */

// função simples
function hello() {
    console.log("Hello Function")
}

console.log(typeof(hello))

// Função anônima >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Podemos usar let ou const para criar uma função anônima, a vantagem de criar 
//funções dessa forma é armazenar o resultado da execução.
let hello2 = function () {
    console.log("Hello função anônima")
}
 
console.log(typeof(hello2))
hello2 ()

// Simplificar a função anônima (arrow function) >>>>>
const hello3 = () => {
    console.log("Hello função anônima simplificada")
}

console.log(typeof(hello3))
hello3()

const hello4 = _=> console.log("hello função anonima simplificada 2")

console.log(typeof(hello4))
hello4()

function somar(num1 , num2){
    return console.log(num1 + num2)
}

console.log(typeof(somar))
somar(2,2)

const somarA =(num1 , num2) => {
    return console.log(somarA)
}

console.log(typeof(somarA))
somarA(3,4)

// função anônima com parametros e retorno simplificada 2 >>>>>>>>>
// neste caso omitimos chaves e o retorno é implicito
// CUIDADO: Não é função simples e dica são os parâmetros
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof(somarAS))
somarAS(5, 10)