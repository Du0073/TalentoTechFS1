const forScroll = document.querySelectorAll('a[href^="#"]')
//console.log(forScroll)

forScroll.forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  })
})

const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('nav ul li a')
//console.log(sections)
//console.log(navLinks)

window.addEventListener('scroll', function(){
  let scrollPosition = window.scrollY;
  //console.log(scrollPosition)

  sections.forEach((section,index)=>{
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    console.log(sectionTop)
    //console.log(sectionHeight)
    if(scrollPosition>=sectionTop-sectionHeight/3){
      navLinks.forEach((link)=>{
        link.classList.remove('active')
      })
    }
  })
})