/*let numeroInteiro = prompt("Insira um número inteiro")
let arrayComNumeroInteiro = []

for(let contadorArray = 0;  contadorArray <= 9; contadorArray++){
    let numeroInteiro = prompt("Insira mais um número inteiro");
    numeroInteiro = numeroInteiro
    arrayComNumeroInteiro[contadorArray] = numeroInteiro

    console.log(arrayComNumeroInteiro);
}*/

//Ver no site da Dodev este exrecício 1.2 **entender a lógica**

/*
let array = []
let arrayInvertido = []

for(let contadorArrayNormal = 0; contadorArrayNormal < 5; contadorArrayNormal++){
    let numero = parseInt(prompt("Digite o " + (contadorArrayNormal + 1) +  "° número"));
    array[contadorArrayNormal] = numero
}

console.log("Array original" + array); /*Exemplo: [1, 2, 3, 4, 5]

let contador = 4
for(let contadorArrayInvertido = 0; contadorArrayInvertido < 5; contadorArrayInvertido){
    arrayInvertido[contadorArrayInvertido] = array[contador] /*Nesse caso seria o valor "5" que se encontra na 4° posição, posição essa definida pela criação da variável "contador"

    contador-- /*Aqui vai diminuir o valor da variável e consequentemente alterar a posição no array*/

    /*Dando um resultado invertido do array da seguinte maneira: [5 , 4, 3, 2, 1]
}*/


/*
//Criando variáveis
let array = []
let arrayInvertido = []
let quantidadeDeNumeros = parseInt(prompt("Defina quantos números terão em seu Array"))

//Alimentando array normaç
for(let posicaoArrayNormal  = 0; posicaoArrayNormal < quantidadeDeNumeros; contadorArrayNormal++){
    let numero = parseInt(prompt("Insira o " + (posicaoArrayNormalArrayNormal) + "° número"))
    array[posicaoArrayNormal] = numero
}

console.log("Seu array normal é" + array)

//Invertendo Array
let contadorDePosicaoArrayNormal = quantidadeDeNumeros - 1

for(let posicaoArrayInvertido = 0; posicaoArrayInvertido < quantidadeDeNumeros; posicaoArrayInvertido++){
    arrayInvertido[posicaoArrayInvertido] = array[contadorDePosicaoArrayNormal]

    contadorDePosicaoArrayNormal--

}

console.log("Seu array invertido é" + arrayInvertido)
*/


let arrayFibonacci = []

let numeroSolicitado = parseInt(prompt("Insira um numero inteiro e positivo"));

//populando o array
for(let posicaoArrayFibonacci = 0; posicaoArrayFibonacci < 10; posicaoArrayFibonacci++){
    arrayFibonacci[posicaoArrayFibonacci] = (numeroSolicitado - 1) + numeroSolicitado
    numeroSolicitado = arrayFibonacci
    console.log(arrayFibonacci)

}

