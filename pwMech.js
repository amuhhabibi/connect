function pwCheck(){
    event.preventDefault();
	var password = document.getElementById("password").value;
	location.replace("/" + password);
}

var input = document.getElementById("password");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    pwCheck();
    event.preventDefault();
    pwCheck();
  }
});
