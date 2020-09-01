var wDrum = document.querySelector(".w");
var aDrum = document.querySelector(".a");
var sDrum = document.querySelector(".s");
var dDrum = document.querySelector(".d");
var jDrum = document.querySelector(".j");
var kDrum = document.querySelector(".k");
var lDrum = document.querySelector(".l");
var crash = new Audio("sounds/crash.mp3");
var kickBass = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

wDrum.addEventListener("click", function(){
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
});

