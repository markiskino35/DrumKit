//set trigger and add addEventListener

let btns = document.querySelectorAll("button");

for (i of btns) {
  i.addEventListener('click', function() { // addEventListener(type, listener);
    // console.log(this.innerHTML);   //'this' is the identity of button that trigger the event listener
    // this.style.color = "white";

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);   //call function makeSound()
    // var letter = this.innerHTML;
    // console.log(letter);

    buttonAnimation(buttonInnerHTML);

  });
}


document.addEventListener("keydown", function(event) {
   // console.log(event);
  makeSound(event.key);         //call function makeSound()
  buttonAnimation(event.key);
});

function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickbass = new Audio('./sounds/kick-bass.mp3');
      kickbass.play();
      break;

    default:
      console.log(letter);

  }
}

function buttonAnimation(currentKey){

var activeButton = document.querySelector("." + currentKey);              //cari class .w , kalau xde titik xjadi

// console.log(activeButton);

activeButton.classList.add("pressed");      //classList - kita applykan CSS class (.pressed from css file) dan apply kepada class .currentKey tdi

setTimeout(function(){                       //setTimeout - guna utk remove CSS class we apply before
  activeButton.classList.remove("pressed");
}, 100);     //time parameter

}
