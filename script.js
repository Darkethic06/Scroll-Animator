
var fromRight = document.getElementById("fromRight");

window.addEventListener("scroll", function() {
  var boxPosition = fromRight.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (boxPosition < windowHeight) {
    fromRight.classList.add('show')
  }else{
    fromRight.classList.remove('show')

  }
});

var fromLeft = document.getElementById("fromLeft");

window.addEventListener("scroll", function() {
  var boxPosition = fromLeft.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (boxPosition < windowHeight) {
    fromLeft.classList.add('show')
  }else{
    fromLeft.classList.remove('show')

  }
});