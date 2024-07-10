const btns = document.querySelectorAll("#btn")
const screen = document.getElementById("screen")

console.log(eval('with (Math) PI'))
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
    if(screen.textContent.length >= 10){
      screen.textContent = "Length error"
    }
    switch(btnPressed){
      case "AC":
        screen.textContent = "|"
        break
      case "del":
        if(screen.textContent.length == 1 || screen.textContent.length == 0){
          screen.textContent = "|"
        }else{
          screen.textContent = screen.textContent.slice(0,-1)
        }
        break
      case "=":
        try {
          screen.textContent = eval(screen.textContent)
          if(screen.textContent.length >= 10){
            screen.textContent = "Length error"
          }
        } catch (error) {
          screen.textContent = "Eval. error"
        }
        break
      default:
        screen.textContent += btn.textContent
    }
    
    
  })
})