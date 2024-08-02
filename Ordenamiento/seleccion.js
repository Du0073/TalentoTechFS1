//Algoritmo de seleccion para ordenar
let numero = [3,7,1,9,5,8,1,3,15,0]

function ordSelec(arr){
    for(let pActual = 0;pActual<=arr.length;pActual++){
        var memoria = arr[pActual]
        var memoriaPos = pActual
        console.log(memoria)
        // for(let recorrido = pActual; recorrido <= arr.length; recorrido++){
        //     if(memoria > arr[recorrido]){
        //         memoria = arr[recorrido]
        //         memoriaPos = recorrido
        //     }
        // }
        
        //arr[memoriaPos] = arr[pActual] 
        //arr[pActual] = memoria
    }
    return arr
}

console.log(ordSelec(numero))
