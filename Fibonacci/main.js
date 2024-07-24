const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

function fibo(n){
  let salida = [0,1]
  if(n==1){
    salida = [0]
  }else if(n == 2){
    salida = [0,1]
  }else{
    for(let i=3; i<=n; i++){
      salida.push(salida[i-2]+salida[i-3])
    }
  }
  return salida
}

function numberToText(n, textoUsar){
  let text = ""
  for(let i=1; i<=n; i++){
    text = text +`${textoUsar}`
  }
  return text
}
//console.log(fibo(5))
//console.log(numberToText(5))
entrada.addEventListener("input", (e)=>{
    numero = e.target.value
    console.log(numero)
})
  
btn.addEventListener("click",()=>{
  let secuencia = fibo(numero)
  //console.log(secuencia)
  secuencia.forEach((dato)=>{
    let hijo = document.createElement("li")
    hijo.innerHTML = numberToText(dato,"|")
    texto.appendChild(hijo)
  })
})
