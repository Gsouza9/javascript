/**
 * Tutorial de JavaScript
 *  @author Gustavo Vieira de Souto
 */

console.log("Strings >>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let nome = "Gustavo"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("Gustavo", "Gu"))
// Concatenação (união)
console.log("Aluno: " + nome) //não usar desta forma
console.log(`Aluno ${nome}`) //forma mais segura

console.log("Números >>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let peso = 83
let altura = 1.83
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
// Exemplo: Cálculo do IMC
let imc
imc = peso / (altura * altura)
console.log(`IMG: ${imc.toFixed(2)}`)
//ATENÇÃO
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 - 0.5)
console.log(0.1 - 0.2)
console.log(0.1 + 0.7)
console.log("Booleanos >>>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores especiais")
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)
console.log("Problemas no uso do var >>>>>>>>>>>>>")
console.log("var permite redeclarar uma variável!!!")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)
// Uso de chaves na linguagem JavaScript
let mediaFinal = 9
console.log(`Média: ${mediaFinal}`)
if (mediaFinal < 5){
    console.log("REPROVADO")
}
else {
    console.log("APROVADO")
    console.log("Emitir certificado")
}
for (let i = 1; i < 10; i++)
    console.log(i)
    console.log("Não processado se a estrutura for")