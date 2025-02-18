//DETECTING BUTTON PRESS
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnnerHTML = this.innerHTML;
    makeSound(buttonInnnerHTML);

    buttonAnimation(buttonInnnerHTML)
  });
}
//DETECTING KEYBOARD PRESS
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key)
});

function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();

      break;

    default:
      console.log(buttonInnnerHTML);
  }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed")
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },300)
}