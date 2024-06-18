//unidades: vw, em, rem, responsive, media query
function abbrevName(name){
    let names = name.split(" ")
    names = names.map(word=>word[0])
    console.log(names)
    let initials = ""
    for(let i = 0; i < names.length; i++){
      initials += names[i]
      console.log(initials)
      console.log(i)
      if(i == names.length-1){
        break
      }
      initials += "."
      
    }


    return initials
}


console.log(-7%2)