/*
*escribe  un programa que muestre por consola (con un print ) los
*numeros de 1 a 100 (ambos incluidos y con un salto de linea entre 
*cada impresion ) sustituyendo los siguientes : 
*- multiplos de 3 por la palabra "fizz". 
*- multiplos de 5 por la palabra "buzz" .
*- multiplos de 3 y 5  por la palabra "fizzbuzz". 
*/

function fizzbuzz(){
    for (let i=1;i<=100;i++){
        if (i%3==0 && i%5==0){
            console.log(i+" fizzbuzz \n")
        }
        else if(i%3==0){
            console.log(i+" fizz \n")
        }
        else if(i%5==0){
            console.log(i+" buzz \n")
        }
        else{ console.log(i)}

    }
}


fizzbuzz()