// Calculator Functionality

var screen = document.getElementById("screen");

// Variable to store all the inputs with type button
var buttonNodes = calbody.querySelectorAll("input[type=button]"); 

// Function to update the screen value
function updateValue(){
	screen.value += this.value;
}

// Function to clear the screen value
function clearValue(){
	screen.value = "";
}

// Function to delete the last character from the screen
function delValue(){
	screen.value = screen.value.replace(screen.value.charAt(screen.value.length-1), "");
}

// Function to perform the calculations
function equalValue(){
	var calData = screen.value;
	screen.value = eval(calData);
}

// Loops through buttonNodes list array
for(var i = 0; i < buttonNodes.length; i++){ 
	// Checks if an array element value id DEL, if yes, then apply a function to del the last character from the screen
	if(buttonNodes[i].value === "DEL"){ 
		buttonNodes[i].addEventListener("click", delValue);
	// Checks if an array element value id CLEAR, if yes, then apply a function to clear the screen value
} else if(buttonNodes[i].value === "CLEAR"){
	buttonNodes[i].addEventListener("click", clearValue);
   	// Checks if an array element value id CLEAR, if yes, then apply a function to perform the calculations
   } else if(buttonNodes[i].value === "="){
   	buttonNodes[i].addEventListener("click", equalValue);
   	// Else apply a function to update the screen value
   } else {
   	buttonNodes[i].addEventListener("click", updateValue);
   }
}


//Search enter keycode

var searchButt = document.getElementById("searchForm").getElementsByTagName("I")[0];
searchButt.addEventListener('keyup', enterKey);

function enterKey(event) {
	var key = event.keyCode;
	if(key == 13) {
		searchButt.focus();
	}
}


// Scroll Functionality
var scrollY = 0;
var speed = 10;
function scrollToEle(eleId) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(eleId).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPosition = currentY + window.innerHeight;
	var scroller = setTimeout(function(){scrollToEle(eleId)}, 5);
	
	if(yPosition > bodyHeight){
		clearTimeout(scroller);
	} else if(currentY > targetY + speed) {
		scrollY = currentY - speed;
		window.scroll(0, scrollY);
	} else {
		if(currentY < targetY - speed){
			scrollY = currentY + speed;
			window.scroll(0, scrollY);
		} else {
			clearTimeout(scroller);
		}
	}
}

// Scroll To Top Button Functionality
window.addEventListener("scroll", showTopBtn);
var scrollBtnDiv = document.getElementById("scroll-top");

// Function to show the top button on window scroll event
function showTopBtn(){
	var currentY = document.body.scrollTop;
	return window.innerWidth > 500 && currentY > 400 ? scrollBtnDiv.style.display = "block" : scrollBtnDiv.style.display = "none";
}

// Function to scroll to top
function scrollToTop(eleId) {
	var currentY = document.body.scrollTop;
	var targetY = document.getElementById(eleId).offsetTop;
	var scroller = setTimeout(function(){scrollToTop(eleId)}, 5);
	if(currentY > targetY){
		scrollY = currentY - speed;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(scroller);
	}
}

// Sidebar Contact Functionality
var bodyEle = document.getElementsByTagName("body")[0];
var label = document.getElementsByClassName("sideContact-label")[0];
var sidebarCon = document.getElementById("sidebar-contact");
window.addEventListener("scroll", throttle(scrollSideBar, 1000));
var timer;

function throttle(fn, waitTime){
	if(timer) {
		window.clearTimeout(timer);
	}
	timer = window.setTimeout(fn, waitTime);
}

function scrollSideBar(e){
	var currentYPos = bodyEle.scrollTop;
	var innHeight = window.innerHeight / 2;
	var x = Math.floor(currentYPos - innHeight) + "px";
	label.style.top = x + "px";
	label.style.position = "fixed";
	sidebarCon.style.top = x + "px";
	sidebarCon.style.position = "fixed";
}

// Sidebar Numberfact Functionality
var numberContainer = document.getElementById("numberfact-container");
var numberBtn = document.getElementById("newFactBtn");
numberBtn.addEventListener("click", loadNumberFact);

window.onload = function(){
	numberFact();
}

function loadNumberFact(event){
	numberFact();
}


function numberFact(){
	var num = Math.floor(Math.random() * (200 - 0)) + 0;
	var sourceUrl = "http://numbersapi.com/" + num + "/trivia/";
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if(xhr.status === 200){
			numberContainer.textContent = xhr.responseText;
		} else {
			numberContainer.textContent = "Sorry, server connection has failed! ";
		}
	};
	xhr.open("GET", sourceUrl);
	xhr.send();
}



