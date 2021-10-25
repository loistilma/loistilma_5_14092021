/*
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector("body").style.display = "none";
      document.querySelector("#loader").style.visibility = "visible";
  } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.display = "initial";  
      document.querySelector("#main").classList = "animate__animated animate__fadeIn animate__slow";
       
  }
}
*/

window.onscroll = function() {scrollFunction()};
var logoWidth = document.querySelector('.top-header #navLogo').clientWidth

//console.log(logoWidth)
function scrollFunction() {
  var nav = document.querySelector('nav')
  var navLogo = document.getElementById('navLogo')
  var navLinks = document.getElementById('navLinks')
  var navText = document.getElementById('navText')
  var navSpan = document.querySelectorAll('.nav-span')

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

    navLogo.style.width = "40px"
    navLogo.style.transform =  'translateY(-16px)'
    navLinks.style.transform = `translateX(${logoWidth}px)`
    navSpan.forEach(span => span.style.display = "none")

  } else {

    navLogo.style.width = "50px"
    navLinks.style.transform = 'translateX(0px)'
    navLogo.style.transform =  'translateY(0px)'
    navSpan.forEach(span => span.style.display = "initial")
  }
}

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = element
    node.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation()
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended')
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true})
  })

  export { animateCSS }

