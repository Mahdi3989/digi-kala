let slideIndex = 1;
let remainingTime = 70000;
function setTime() {
  if (remainingTime == 0) return;
  let h = Math.floor(remainingTime / 3600);
  let m = Math.floor((remainingTime % 3600) / 60);
  let s = (remainingTime % 3600) % 60;
  document.querySelector("#hours").innerHTML = h;
  document.querySelector("#minutes").innerHTML = m;
  document.querySelector("#seconds").innerHTML = s;
}
setInterval(() => {
    setTime();
    remainingTime--
},1000)
function setSlide(input, index) {
  slideIndex = index;
  let item = document.querySelector(`#${input}`);
  let slides = [...document.querySelector(".slides").children];
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  item.classList.add("active");
}
setInterval(() => {
  slideIndex++;
  if (slideIndex > 3) {
    slideIndex = 1;
  }
  setSlide(`slide${slideIndex}`, slideIndex);
}, 10000);

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:true,
            loop:false
        }
    }
})