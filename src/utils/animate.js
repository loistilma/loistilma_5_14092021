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

console.log(logoWidth)
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

