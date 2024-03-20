let nota = Number(prompt("Insira sua nota"))

if(nota > 0 && nota <= 10){
    console.log("Sua nota é " + nota);
}else{
    while(nota < 0 || nota > 10){
       nota = Number(prompt("Incorreto, notas válidas entre 0 e 10"))
        console.log("Sua nota é " + nota)
        break;
        
    }
}