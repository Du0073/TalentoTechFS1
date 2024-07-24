const entrada = document.getElementById("entrada")
const btn = document.getElementById("btn")
const texto = document.getElementById("texto")

let n = 0
entrada.addEventListener("input",(evento)=>{
  n = evento.target.value
  //console.log(n)
})

btn.addEventListener("click",()=>{
  for(let i = 2; i<=n; i++){
    if(n%i == 0){
      if(i==n){
        console.log(n, `es primo - i=${i}`)
        texto.innerHTML = `${n} es un número primo`
      }else{
        console.log(n, `no es primo - i=${i}`)
        texto.innerHTML = `${n} no es primo y es múltiplo de ${i}`
        break        
      }
    }
    console.log(i)
  }
})

a = 0, b = 1
seq = []
console.log(a,b)