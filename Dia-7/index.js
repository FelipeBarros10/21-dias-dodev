//media geral , qauntos homens enviaram as notas, quantas mulheres tiveram nota acima de 7, qual a maior nota entre os homens

let mediaGeral = 0
let qntsHomens = 0
let qntsMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let maiorNotaMulheres = 0
contador = 1

while(contador <= 5){
    let nota = Number(prompt("Qual a nota do aluno?"))
    let sexo = prompt("Qual o sexo do aluno? (M / F)")

    if(sexo == "m"){
        qntsHomens++
        if(nota > maiorNotaHomens){
            maiorNotaHomens = maiorNotaHomens + nota

        }
    }

    if(sexo == "f" && nota > 7){
        qntsMulheresAcimaDe7++
        if(nota > maiorNotaMulheres){
            maiorNotaMulheres = maiorNotaMulheres + nota
           
        }

    }

    mediaGeral = mediaGeral + nota
    contador++
}

if(maiorNotaMulheres > maiorNotaHomens){
    console.log("Nota das mulheres maior que dos homens")

}else{
    console.log("Nota dos homens maior do que das mulheres")
}


console.log("A média geral dos alunos foram " + mediaGeral);
console.log("A quantidade de homens que enviaram as notas foram de " + qntsHomens);
console.log("A quantidade de mulheres que tiveram nota acima de 7 foi de " + qntsMulheresAcimaDe7);
console.log("A maior nota dos homens foi " + maiorNotaHomens);



/*let saldo = 1000
let maiorValorInserido = 0
let somaValoresInseridos = 0
let continuar = false


do {
    const nome = prompt("Digite seu nome:");
    const cpf = prompt("Digite seu CPF");
    const valor = Number(prompt("Inisra o valor da transação"));
    const operacao = prompt("Qual operacao deseja fazer? S / D");

    if(valor < 0){
        console.log("Valor incorreto, digite um valor maior que zero")

    }else if(valor > saldo){
        console.log("Valor icorreto, insira um valor menor que " + saldo)

    }else if(operacao == "s"){
        console.log(saldo - valor)
        saldo -= valor
    }else{
        console.log(saldo + valor)
        saldo += valor
        if(valor > maiorValorInserido){
            maiorValorInserido = valor;

        }

    }

    const opcao = Number(prompt("Deseja continuar? 1 para sim e 2 para não"))
        if(opcao == 1){
            continuar = true
        }else{
            continuar =  false

        }
        
} while (continuar == true){
    


}*/
