const btns = document.querySelectorAll("#btn")
const screen = document.getElementById("screen")

//console.log(typeof(btns))
console.log(screen)
btns.forEach(btn => {
  //console.log(btn.textContent)
  btn.addEventListener("click",() => {
    //console.log(btn.textContent)
    btnPressed = btn.textContent
    if(screen.textContent == "|"){
      screen.textContent = ""
    }
    
    //screen.textContent += btn.textContent

    switch(btn.textContent){
      case "AC":
        screen.textContent = "|"
        break
      case "del":
        if(screen.textContent.length == 1){
          screen.textContent = "|"
        }else{
          screen.textContent = screen.textContent.slice(0,-1)
        }
        break
      case "=":
        screen.textContent = eval(screen.textContent)
      default:
        screen.textContent = btn.textContent
    }

    
  })
})