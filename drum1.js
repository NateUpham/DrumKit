var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i = 0; i < numberOfDrumButtons; i++){
	document.querySelectorAll(".drum")[i].addEventListener("click", function(){
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

document.addEventListener("keydown", function(event){
	makeSound(event.key);
	buttonAnimation(event.key)
});


function makeSound(key) {
	switch (key){
		case "w":
		 var tom1 = new Audio("sounds/tom-1.mp3");
		 tom1.play();
		 break;
		case "a":
		 var tom2 = new Audio("sounds/tom-2.mp3");
		 tom2.play();
		 break;
		case "s":
		 var tom3 = new Audio("sounds/tom-3.mp3");
		 tom3.play();
		 break;
		case "d":
		 var tom4 = new Audio("sounds/tom-4.mp3");
		 tom4.play();
		 break;
		case "j":
		 var snare = new Audio("sounds/snare.mp3");
		 snare.play();
		 break;
		case "k":
		 var crash = new Audio("sounds/crash.mp3");
		 crash.play();
		 break;
		case "l":
		 var kick = new Audio("sounds/kick-bass.mp3");
		 kick.play();
		 break;
	}
}

function buttonAnimation(currentKey){
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function(){
		activeButton.classList.remove("pressed");
	}, 100);
}

/* wDrum.addEventListener("click", function(){
	crash.play();
});
document.addEventListener("keydown", function(w){
	if (w.keyCode == 87){
	crash.play();}
});
aDrum.addEventListener("click", function(){
	kickBass.play();
});
document.addEventListener("keydown", function(a){
	if (a.keyCode == 65){
	kickBass.play();}
});
sDrum.addEventListener("click", function(){
	snare.play();
});
document.addEventListener("keydown", function(s){
	if (s.keyCode == 83){
	snare.play();}
});
dDrum.addEventListener("click", function(){
	tom1.play();
});
document.addEventListener("keydown", function(d){
	if (d.keyCode == 68){
	tom1.play();}
});
jDrum.addEventListener("click", function(){
	tom2.play();
});
document.addEventListener("keydown", function(j){
	if (j.keyCode == 74){
	tom2.play();}
});
kDrum.addEventListener("click", function(){
	tom3.play();
});
document.addEventListener("keydown", function(k){
	if (k.keyCode == 75){
	tom3.play();}
});
lDrum.addEventListener("click", function(){
	tom4.play();
});
document.addEventListener("keydown", function(l){
	if (l.keyCode == 76){
	tom4.play();}
}); */

