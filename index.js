var button  = document.querySelector(".bigButton");



button.addEventListener("click",playSound);

function playSound(){
    var sound = new Audio("./sounds/tsound.mp3");
    sound.play();

}