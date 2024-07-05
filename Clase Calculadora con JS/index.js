const botones = document.querySelectorAll("#btn")
const pantalla = document.querySelector("#pantalla")

/*
console.log(pantalla.textContent)
botones.forEach(boton => {
  console.log(boton.textContent)
  boton.addEventListener("click",()=>{
    const botonApretado = boton.textContent
    console.log(botonApretado)
    pantalla.textContent = pantalla.textContent + botonApretado
  })
})
*/
console.log(pantalla.textContent)
botones.forEach(boton => {
  console.log(boton.textContent)
  boton.addEventListener("click",()=>{
    const botonApretado = boton.textContent
    console.log(pantalla.textContent)
    if(botonApretado == "AC"){
      pantalla.textContent = "0"
      return
    }else if(botonApretado == "del"){
      if(pantalla.textContent.length == 1){
        pantalla.textContent = "0"
        return
      }else{
        pantalla.textContent = pantalla.textContent.slice(0,-1)
         return
      }
    }else{
      if(pantalla.textContent == "0"){
        pantalla.textContent = botonApretado
      }else{
        pantalla.textContent = pantalla.textContent + botonApretado
      }
    }
    
  })
})