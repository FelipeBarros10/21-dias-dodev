/*
Nome
Idade
Peso
Altura
Profissão
Informações

let nome = prompt("Insira seu nome");
let idade = Number(prompt("Insira sua idade"));
let peso = Number(prompt("Insira seu peso"));
let altura = Number(prompt("Insira sua altura"));
let profissao = prompt("Insira sua profissão");
let informacoes = "Olá " + nome + ", você tem " + idade + " anos, é " + profissao + " tem uma altura de " + altura + " e pesa" + peso + "kg";
let idadeEmMeses = idade * 12;
let idadeEmDias = idade * 365;
let idadeEmSemanas = idade * 52;

console.log(informacoes);

if(idade <= 17){
    console.log("Sem geladas para você");
}else{
    console.log("Liberado para tomar uma");
}

console.log("Idade em meses: " + idadeEmMeses);
console.log("Idade em semanas: " + idadeEmSemanas);
console.log("Idade em dias: " + idadeEmDias);
*/

// IMC , PESO, ALTURA, NOME, IDADE, Ano atual

/*
let nome = prompt("Qual seu nome?");
let idade = Number(prompt("Qual a sua idade?"));
let anoNascimento = 2024 - idade;
let peso = prompt("Qual o seu peso?");
let altura = prompt("Qual a sua altura?");
let imc  = peso / (altura * altura);


if(imc < 18.5){
    console.log("Seu IMC encontra-se na faixa de magreza");
}else if(imc < 24,9){
    console.log("Seu IMC encontra-se na faixa Normal");
}else if(imc < 30){
    console.log("Seu IMC encontra-se na faixa Obesidade");

}else{
    console.log("Seu IMC encontra-se na faixa Obesidade grave")
}


console.log("Seu ano de nascimento é " + anoNascimento );
*/

let idade = Number(prompt("Qual a sua idade?"))
let anoAtual = Number(prompt("Em que ano nós estamos?"));
let anoNascimento = anoAtual - idade;
let contadorIdadePorAno = 0;


for(let contador = anoNascimento; anoNascimento < anoAtual;  anoNascimento++){
   if(contadorIdadePorAno < idade){
        console.log(anoNascimento + " - " + contadorIdadePorAno + " anos de idade");
        contadorIdadePorAno++
   }
}
