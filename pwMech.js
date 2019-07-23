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

// function valueCheck(){
// 	var x = document.getElementById("list").value;
// 	window.location = "/" + x;
// }

function mGallery(){
	window.location = "/gallery";
}

function mMabaca(){
	window.location = "/mabaca";
}