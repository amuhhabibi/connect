var x = 0; //silang
var y = 1; //soal
var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var op3 = document.getElementById('op3');
var op4 = document.getElementById('op4');
var op5 = document.getElementById('op5');
var op6 = document.getElementById('op6');
var silang1 = document.getElementById('silang1');
var silang2 = document.getElementById('silang2');
var silang3 = document.getElementById('silang3');


function tambah_silang(){
	if (x <= -1){
		++x;
	}else if (x >= 4){
		--x;
	}else if (x == 0) {
	    silang1.removeAttribute("class", "silang_on");
		silang2.removeAttribute("class", "silang_on");
		silang3.removeAttribute("class", "silang_on");
	}else if (x == 1) {
	    silang1.setAttribute("class", "silang_on");
		silang2.removeAttribute("class", "silang_on");
		silang3.removeAttribute("class", "silang_on");
	}else if (x == 2) {
	    silang1.setAttribute("class", "silang_on");
		silang2.setAttribute("class", "silang_on");
		silang3.removeAttribute("class", "silang_on");
	}else if (x == 3) {
	    silang1.setAttribute("class", "silang_on");
		silang2.setAttribute("class", "silang_on");
		silang3.setAttribute("class", "silang_on");
	}
}

function pertanyaan(){
	if (y <= 0){
		++y;
	}else if (y >= 3){
		--y;
	}else if (y == 1) {
		document.getElementById('tema').innerHTML = "Bagian tubuh yang bergerak saat tertawa :";
		op1.innerHTML = "(43) Mulut";
		op2.innerHTML = "(18) Pipi";
		op3.innerHTML = "(13) Perut";
		op4.innerHTML = "(9) Bahu";
		op5.innerHTML = "(4) Dada";
		op6.innerHTML = "(3) Dagu";
	}else if (y == 2) {
		document.getElementById('tema').innerHTML = "Jenis binatang berbisa :";
		op1.innerHTML = "(36) Ular";
		op2.innerHTML = "(21) Kelabang";
		op3.innerHTML = "(17) Laba-laba";
		op4.innerHTML = "(14) Tawon";
		op5.innerHTML = "(8) Lebah";
		op6.innerHTML = "(4) Kalajengking";
	}
}

window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
	if (key.keyCode == "49") {
		document.getElementById("op1").classList.toggle("list_on");
	}else if (key.keyCode == "50") {
		op2.classList.toggle("list_on");
	}else if (key.keyCode == "51") {
		op3.classList.toggle("list_on");
	}else if (key.keyCode == "52") {
		op4.classList.toggle("list_on");
	}else if (key.keyCode == "53") {
		op5.classList.toggle("list_on");
	}else if (key.keyCode == "54") {
		op6.classList.toggle("list_on");
	}else if (key.keyCode == "83") {
		++y;
		x = 0;
	    silang1.removeAttribute("class", "silang_on");
		silang2.removeAttribute("class", "silang_on");
		silang3.removeAttribute("class", "silang_on");
	    op1.removeAttribute("class", "list_on");
		op2.removeAttribute("class", "list_on");
		op3.removeAttribute("class", "list_on");
	    op4.removeAttribute("class", "list_on");
		op5.removeAttribute("class", "list_on");
		op6.removeAttribute("class", "list_on");
		pertanyaan();
		tambah_silang();
	}else if (key.keyCode == "65") {
		--y;
		x = 0;
	    op1.removeAttribute("class", "list_on");
		op2.removeAttribute("class", "list_on");
		op3.removeAttribute("class", "list_on");
	    op4.removeAttribute("class", "list_on");
		op5.removeAttribute("class", "list_on");
		op6.removeAttribute("class", "list_on");
		pertanyaan();
		tambah_silang()
	}else if (key.keyCode == "88") {
		++x;
		tambah_silang();
	}else if(key.keyCode == "90"){
		--x;
		tambah_silang()
	}else if(key.keyCode == "27"){
		modal.style.display = "none";
	}else if(key.keyCode == "72"){
		modal.style.display = "block";
	}
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


