let numero = [3,7,1,9,2,21,34,15,0,1]

// //Ordena Strings
// console.log(numero)

// numero.sort()

// console.log(numero)

// numero.sort()

// //Para ordenar numeros:
// const compareNumbers = (a,b) => a-b

// numero.sort(compareNumbers)

// numero.sort(function(a,b){
//     return a-b;
// })

// console.log(numero)

//Con Json (Diccionario)
personas = [{nombre: "Juan", edad:21},
    {nombre: "Pedro", edad:30},
    {nombre: "Ramiro", edad:40},
    {nombre: "Daniel", edad:15}
]

personas.sort((a,b)=>(a.edad-b.edad))

console.log(personas)