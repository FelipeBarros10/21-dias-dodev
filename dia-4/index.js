//nome, idade, se possui carteira de motorista e se tem algum carro

const nome = prompt('Insira seu nome')
const idade = Number(prompt('Insira sua idade'))
const cartaMotorista = prompt('Possui carta de motorista? (sim/nao)')
const carro = prompt('possui carro? (sim/nao)')

if(idade < 18 || cartaMotorista === 'nao'){
    console.log(nome + ', você não pode dirigir')

}else if(carro === 'nao'){
    console.log(nome + ", você pode dirigir mas não tem carro")

}else{
    console.log(nome + ', você será o motorista!')
}