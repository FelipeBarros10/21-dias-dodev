// ABASTECER COM GASOLINA, ALCOOL OU CALIBRAR PNEU?

let escolhaDoUsuario = prompt('Você irá abastecer com gasolina, álcool ou irá calibrar os pneus?')

switch(escolhaDoUsuario){
    case 'gasolina':
       let valorGasolina = prompt('Qual o valor desejado?')
       console.log('Sua quantidade de litros abastecidos foram ' + valorGasolina / 5)
       break;
    case 'álcool':
        let valorAlcool = prompt('Qual o valor desejado?')
        console.log('Sua quantidade de litros abastecidos foram ' + valorAlcool / 3)
        break;
    default:
        console.log('Pneus calibrados com sucesso')

}