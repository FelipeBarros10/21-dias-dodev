/*
Nome
Idade
Peso
Altura
Profissão
Informações
*/
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

if(idade <= 17){s
    console.log("Sem geladas para você");
}else{
    console.log("Liberado para tomar uma");
}

console.log("Idade em meses: " + idadeEmMeses);
console.log("Idade em semanas: " + idadeEmSemanas);
console.log("Idade em dias: " + idadeEmDias);

