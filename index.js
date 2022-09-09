var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
  var innerhtml = this.innerHTML;
  sound(innerhtml);
}

document.addEventListener("keypress", handlePress);

function handlePress(){
    
    sound(event.key);
}

function sound(key){
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;
    
        case "a":
          var tom1 = new Audio("sounds/tom-2.mp3");
          tom1.play();
          break;
    
        case "s":
          var tom1 = new Audio("sounds/tom-3.mp3");
          tom1.play();
          break;
    
        case "d":
          var tom1 = new Audio("sounds/tom-4.mp3");
          tom1.play();
          break;
    
        case "j":
          var tom1 = new Audio("sounds/snare.mp3");
          tom1.play();
          break;
    
        case "k":
          var tom1 = new Audio("sounds/crash.mp3");
          tom1.play();
          break;
    
        case "l":
          var tom1 = new Audio("sounds/kick-bass.mp3");
          tom1.play();
          break;
    
        default:
          break;
      }
}
