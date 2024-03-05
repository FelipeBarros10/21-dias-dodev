let nomeDoUsuario = prompt('insira seu nome');
let idadeDoUsuario = parseInt(prompt('Insira sua idade'));
let alturaDoUsuario = parseFloat(prompt('Insira sua altura'));
let pesoDoUsuario = parseInt(prompt('Insira seu peso'));
let anoDeNascimento = 2024 - idadeDoUsuario;
let imcDoUsuario = pesoDoUsuario / (alturaDoUsuario * alturaDoUsuario);

console.log("Olá, " + nomeDoUsuario + ",você tem " + idadeDoUsuario + " anos, nasceu em " + anoDeNascimento +
            ",tem " + alturaDoUsuario + " de altura,pesa " + pesoDoUsuario + " kg e seu IMC é " + imcDoUsuario + " kg/m2.");


