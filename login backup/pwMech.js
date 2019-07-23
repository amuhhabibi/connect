function pwCheck(){
    event.preventDefault();
	var password = document.getElementById("password").value;
	window.location = "/" + password;
}

function pwCheckBtn(){
	var x = event.keyCode;
	if (x == 13) {
	  	pwCheck();
	}
}