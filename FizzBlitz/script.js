const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function bltfitz(n){
  salida = []
  for(let i = 1; i <= n; i++){
    if(i%3 == 0 & i%5 == 0){
      salida.push("FitBitz")
    }else if(i%3 == 0){
      salida.push("Fitz")
    }else if(i%5 == 0){
        salida.push("Blitz")
    }
  }
  return salida;
}

entrada.addEventListener("input", (e)=>{
    numero = e.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    let secuencia = bltfitz(numero) // ToDo: change thi
    //console.log(secuencia)
    secuencia.forEach((dato)=>{
      let hijo = document.createElement("h3")
      hijo.innerHTML = dato//ToDo: Change thi
      texto.appendChild(hijo)
    })
  })




const ul = document.getElementById("ul")
const btnFB = document.getElementById("btnFB")

let n = 15
let arr = []


for(let i = 0; i<=n; i++){
  arr[i] = i
}

console.log(arr)

btnFB.addEventListener("click",()=>{
  arr.forEach((num)=>{
    let child = document.createElement("li")
    child.innerHTML = num
    ul.appendChild(num)
  })
})