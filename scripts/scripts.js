$(".checkbox-dropdown").click(function () {
  $(this).toggleClass("is-active");
});

$(".checkbox-dropdown ul").click(function (e) {
  e.stopPropagation();
});


// Simulation controls to illustrate differences
// This is not relevant to the implementing the fanciness
const element = document.querySelector('main')
// slider communication
const setProperty = (property, value) => document.body.style.setProperty(property, value)
// fanciness on/off
const toggleTheFancy = () => element.classList.toggle('fancy')
// shape shifting
const toggleTheShape = () => element.classList.toggle('square')

setProperty('--demo-width', 100)
