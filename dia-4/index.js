const fome = prompt('Você está com fome?')
const dinheiro = (prompt('Você possui dinheiro?'))
const abertoOuNao = prompt('O restaurante está aberto?')

if(fome === 'nao' || dinheiro === 'nao'){
    console.log('Hoje a janta será em casa')
}else if( fome === 'sim' && dinheiro === 'sim' && abertoOuNao === 'nao'){
    console.log('Peça um Delivery')

}else{
    console.log('Hoje o jantar será no seu restaurante preferido')
}