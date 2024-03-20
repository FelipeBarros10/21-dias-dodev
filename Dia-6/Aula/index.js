let tabuada = Number(prompt("Escolha um numero"))

for(let multiplicando = tabuada; multiplicando <= tabuada + 3; multiplicando++ ){
    console.log("Tabuada de:" + multiplicando);
    for(let multiplicador  = 0; multiplicador <= 10;  multiplicador++){
        console.log(multiplicando + " x " + multiplicador + " = " + multiplicando * multiplicador);
    }
}



//jeito mais curto de fazer o for que foi feito logo abaixo desse
//for(let contador = tabuada; contador <= tabuada + 2; contador++){
   //console.log("tabuada de: " + contador)
    //for(contador2 = 0; contador2 <= 10; contador2++){
        //console.log(contador + " x " + contador2 + " = " + contador * contador2)

    //}
//}



//let tabuada = Number(prompt("Escolha um numero"))

//for(let contador = 1; contador <= 10; contador++){
    //console.log(tabuada + " x " + contador + " = " + tabuada * contador);
//}
//tabuada++ 
//for(let contador = 1; contador <= 10; contador++){
    //console.log(tabuada + " x " + contador + " = " + tabuada * contador);
//}
//tabuada++
//for(let contador = 1; contador <= 10; contador++){
    //console.log(tabuada + " x " + contador + " = " + tabuada * contador);
//}


//for(let contador = 50; contador >= 0; contador -= 5){
    //console.log(contador);
//}


//for(let contador = 0; contador <= 50; contador += 5){
    //console.log(contador);
//}


//for(let contador = 0; contador <= numero; contador++){
    //console.log(contador);
//}

