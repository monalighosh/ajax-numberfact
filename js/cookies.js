// Setting up cookies Functionality

function setCookie(name, value, days){
	var today = new Date();
	today.setTime(today.getTime() + ((1000*60*60*24)*days));
	var expires = "expires=" + today.toUTCString();
	var cookie = name + "=" + value + ";" + expires + ";path=/";
	document.cookie = cookie;
}

// Getting cookies Functionality
function getCookie(name){
	var name = name + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookieSplit = decodedCookie.split(";");

	for(var i = 0; i < cookieSplit.length; i++){
		var currentCookie = cookieSplit[i];

		if(currentCookie.indexOf(name) == 0){
			return currentCookie.substring(name.length, currentCookie.length);
		}
	}
	return "";
}

// Checking cookies Functionality
function checkCookie(e){
	var username = getCookie("username");
	if(username != ""){
		alert("Welcome again " + username);
	} else {
		username = prompt("Welcome, please enter your name", "");
		if(username != "" && username !== null) {
			setCookie("username", username, 183);
		}
	}
}

document.addEventListener("DOMContentLoaded", checkCookie);

