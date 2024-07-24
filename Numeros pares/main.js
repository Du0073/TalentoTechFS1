const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function pares(n){
  //Dime si es par o no el numero
  return n%2==0
}

//console.log(pares(8))

entrada.addEventListener("input", (e)=>{
    numero = e.target.value
    console.log(numero)
})

btn.addEventListener("click",()=>{
    if(pares(numero)){
      let hijo = document.createElement("h3")
      hijo.innerHTML = "El número ingresado es par."
      texto.appendChild(hijo)
    }else{
      let hijo = document.createElement("h3")
      hijo.innerHTML = "El número ingresado NO es par."
      texto.appendChild(hijo)
    }
})




