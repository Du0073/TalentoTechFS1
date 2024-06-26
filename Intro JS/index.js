const btn = document.querySelector("button")

function random(number){
  return Math.floor(Math.random()*(number+1))
}


btn.addEventListener("click", ()=>{
  const rdnColor = `rgb(${random(255)},${random(255)}, ${random(255)})`
  
  const redColor = random(255)
  const greenColor = random(100)
  const blueColor = random(100)
  
  console.log(rdnColor)
  /*
  console.log(redColor,greenColor,blueColor)
  document.body.style.backgroundColor = `rgb(${redColor},
                      ${greenColor},${blueColor})`
  */
  document.body.style.backgroundColor = rdnColor;
})

btn.addEventListener("click", ()=>{
  document.body.style.backgroundColor = `rgb(${random(255)},${random(255)}, ${random(255)})`;
})











// console.log("hello modafuck*r world!!!")

// number = 3
// console.log("The data type is " + typeof(number))

// string = "Hi Woooorrlldd !!!"
// console.log("The data type is",typeof(string) )

// bool = true
// console.log("Data type:",typeof(bool))
// /*
// vari = true

// if(typeof(vari) == "number"){
//   result = vari*8
// }
// else if(typeof(vari) == "string"){
//   result = "Concatenating: " + vari
// }else{
//   result = "Neither string nor number"
// }
// console.log(result)
// */

// vari = 10
// if(typeof(vari) == "number"){
//   for(var i = 0; i < vari; i++){
//     console.log(i)
//   }
// }else {
//     console.log("Get in a fucking number idiot!!!")
// }
