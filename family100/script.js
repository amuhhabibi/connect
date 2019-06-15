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
var nilai_a = document.getElementById("nilai_a");
var nilai_b = document.getElementById("nilai_b");
var f = 0; //team a
var g = 0; //team b

function nolf(){
	if (f == 0) {
		document.getElementById("nilai_a").innerHTML = "00";
	}else if (f == -10) {
		f += 10;
	}
}
function seratusf(){
	if (f == 90) {
		f -= 10;
	}
}

function nolg(){
	if (g == 0) {
		document.getElementById("nilai_b").innerHTML = "00";
	}else if (g == -10) {
		g += 10;
	}
}
function seratusg(){
	if (g == 90) {
		g -= 10;
	}
}

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
	}else if (y >= 8){
		--y;
	}else if (y == 1) {
		document.getElementById('tema').innerHTML = "Bagian tubuh yang bergerak saat tertawa :";
		op1.innerHTML = "Mulut".bold();
		op2.innerHTML = "Pipi".bold();
		op3.innerHTML = "Perut".bold();
		op4.innerHTML = "Bahu".bold();
		op5.innerHTML = "Dada".bold();
		op6.innerHTML = "Dagu".bold();
	}else if (y == 2) {
		document.getElementById('tema').innerHTML = "Jenis binatang yang berbisa :";
		op1.innerHTML = "Ular".bold();
		op2.innerHTML = "Kelabang".bold();
		op3.innerHTML = "Laba-laba".bold();
		op4.innerHTML = "Tawon".bold();
		op5.innerHTML = "Lebah".bold();
		op6.innerHTML = "Kalajengking".bold();
	}else if (y == 3) {
		document.getElementById('tema').innerHTML = "Tempat untuk bersandar :";
		op1.innerHTML = "Tiang listrik".bold();
		op2.innerHTML = "Mobil".bold();
		op3.innerHTML = "Kursi".bold();
		op4.innerHTML = "Pintu".bold();
		op5.innerHTML = "Tembok".bold();
		op6.innerHTML = "Punggung orang".bold();
	}else if (y == 4) {
		document.getElementById('tema').innerHTML = "Tempat yang sering disebut mistik:";
		op1.innerHTML = "Kuburan".bold();
		op2.innerHTML = "Goa".bold();
		op3.innerHTML = "Gunung".bold();
		op4.innerHTML = "Hutan".bold();
		op5.innerHTML = "Rumah tua".bold();
		op6.innerHTML = "Laut".bold();
	}else if (y == 5) {
		document.getElementById('tema').innerHTML = "Hal yang dilakukan saat menunggu antrian :";
		op1.innerHTML = "Main HP".bold();
		op2.innerHTML = "Melihat-lihat".bold();
		op3.innerHTML = "Ngobrol".bold();
		op4.innerHTML = "Cek uang".bold();
		op5.innerHTML = "Cek belanjaan".bold();
		op6.innerHTML = "Bengong".bold();
	}else if (y == 6) {
		document.getElementById('tema').innerHTML = "Hewan dengan wajah yang seram :";
		op1.innerHTML = "Harimau".bold();
		op2.innerHTML = "Gorilla".bold();
		op3.innerHTML = "Monyet".bold();
		op4.innerHTML = "Iguana".bold();
		op5.innerHTML = "Buaya".bold();
		op6.innerHTML = "Serigala".bold();
	}else if (y == 7) {
		document.getElementById('tema').innerHTML = "Pujian orang tua pada anaknya yang baru cukur :";
		op1.innerHTML = "Ganteng".bold();
		op2.innerHTML = "Bersih".bold();
		op3.innerHTML = "Rapi".bold();
		op4.innerHTML = "Macho".bold();
		op5.innerHTML = "Bagus".bold();
		op6.innerHTML = "Keren".bold();
	}else if (y == p) {
		document.getElementById('tema').innerHTML = "";
		op1.innerHTML = "".bold();
		op2.innerHTML = "".bold();
		op3.innerHTML = "".bold();
		op4.innerHTML = "".bold();
		op5.innerHTML = "".bold();
		op6.innerHTML = "".bold();
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
	}else if (key.keyCode == "79") {
		nilai_a.innerHTML = f += 10;
		nolf();
		nolf();
		seratusf()
		seratusf()
	}else if (key.keyCode == "73") {
		nilai_a.innerHTML = f -= 10;
		nolf();
		nolf();
		seratusf()
		seratusf()
	}else if (key.keyCode == "76") {
		nilai_b.innerHTML = g += 10;
		nolg();
		nolg();
		seratusg()
	}else if (key.keyCode == "75") {
		nilai_b.innerHTML = g -= 10;
		nolg();
		nolg();
		seratusg()
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


