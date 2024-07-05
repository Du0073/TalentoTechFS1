// Encontrar números primos usando if y for
numero = 11

if(numero%2 == 0){
  if(numero == 2){
    console.log("2 es primo")
  }else{
    console.log("No es primo")
  }
}else{
    if(numero%3 ==0){
        if(numero == 3){
            console.log("el 3 es primo")
        }else{
            console.log("el numero no es primo")
        }
    }else{
        if(numero%5 == 0){
            console.log("el 5 es primo")
        }else{
            console.log("el numero no es primo")
        }
    }
}