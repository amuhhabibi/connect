var x = 1;

function tambah_silang(){

	if (x == 1) {
	    document.getElementById('silang1').setAttribute("class", "silang_on");
	    ++x;
	}else if (x == 2) {
	    document.getElementById('silang1').setAttribute("class", "silang_on");
		document.getElementById('silang2').setAttribute("class", "silang_on");
		++x;
	}else if (x == 3) {
	    document.getElementById('silang1').setAttribute("class", "silang_on");
		document.getElementById('silang2').setAttribute("class", "silang_on");
		document.getElementById('silang3').setAttribute("class", "silang_on");
	}
}

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
	if (key.keyCode == "49") {
		document.getElementById('op1').setAttribute("class", "list_on");
	}else if (key.keyCode == "50") {
		document.getElementById('op2').setAttribute("class", "list_on");
	}else if (key.keyCode == "51") {
		document.getElementById('op3').setAttribute("class", "list_on");
	}else if (key.keyCode == "52") {
		document.getElementById('op4').setAttribute("class", "list_on");
	}else if (key.keyCode == "53") {
		document.getElementById('op5').setAttribute("class", "list_on");
	}else if (key.keyCode == "54") {
		document.getElementById('op6').setAttribute("class", "list_on");
	}else if (key.keyCode == "88") {
		tambah_silang();
	}
}

function turnon1(){
	document.getElementById('op1').setAttribute("class", "list_on");
}
function turnon2(){
	document.getElementById('op2').setAttribute("class", "list_on");
}
function turnon3(){
	document.getElementById('op3').setAttribute("class", "list_on");
}
function turnon4(){
	document.getElementById('op4').setAttribute("class", "list_on");
}
function turnon5(){
	document.getElementById('op5').setAttribute("class", "list_on");
}
function turnon6(){
	document.getElementById('op6').setAttribute("class", "list_on");
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("quesmark");
var span = document.getElementsByClassName("close")[0]; 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}