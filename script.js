

//navigation bar dots color
var navUl = document.getElementById('dots').getElementsByTagName('li');
for (var y = 0; y < navUl.length; y++) {
  navUl[y].addEventListener('click', checkLi);
}

function checkLi(ev) {
  document.querySelector('.buttonClickedClass').classList.remove('buttonClickedClass');

  ev.target.classList.add('buttonClickedClass');
}

// turns sections
function reveal() {
  var reveals = document.querySelectorAll(".span-animation");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



// hiding name
const nav = document.getElementById("name")
const logo = document.getElementById('logo')
let lastScrollY= window.scrollY;

window.addEventListener("scroll", () =>{
  if (lastScrollY < window.scrollY){
    nav.classList.add('hide');
    logo.classList.add('hide');
  }else if (lastScrollY=== window.scrollY){
    nav.classList.remove('hide');
    logo.classList.remove('hide');
  }
}
)

// scrolling throught the slides

// window.addEventListener("wheel", console.log(WheelEvent.wheelDeltaY))

/* The flag that determines whether the wheel event is supported. */
var supportsWheel = false;
const slidesArray = document.querySelectorAll(".dot")
var currentSlide = 0
/* The function that will run when the events are triggered. */
function scrollTheSlides (e) {
  /* Check whether the wheel event is supported. */
  if (e.type == "wheel") supportsWheel = true;
  else if (supportsWheel) return;

  /* Determine the direction of the scroll (< 0 → up, > 0 → down). */
  var delta = ((e.deltaY || -e.wheelDelta || e.detail) >> 10) || 1;

  /* ... */
  if (delta>0 && currentSlide<slidesArray.length -1){
    console.log("before current slide is " + currentSlide)
    currentSlide+= 1
    slidesArray[currentSlide].click();
    console.log('down')    
    console.log("after current slide is " + currentSlide)
    console.log(slidesArray)
  } else if (delta<0 && currentSlide>0){
    console.log("before current slide is " + currentSlide)
    currentSlide-= 1
    slidesArray[currentSlide].click();
    console.log('up')
    console.log("after current slide is " + currentSlide)
    
  } else{
    console.log("another action")
    console.log("current slide is " + currentSlide)
  }
}

/* Add the event listeners for each event. */
document.addEventListener('wheel', scrollTheSlides);