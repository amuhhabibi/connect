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
var tulisan_nilai_a = document.getElementById("nilai_a");
var tulisan_nilai_b = document.getElementById("nilai_b");
var tulisan_nilai_c = document.getElementById("nilai_c");
var tulisan_nilais;
var aa = document.getElementById("sfx_pressed"); 
var ab = document.getElementById("sfx_right"); 
var ac = document.getElementById("sfx_drumroll"); 
var ad = document.getElementById("sfx_wrong"); 
var ae = document.getElementById("sfx_wrong_max"); 
var af = document.getElementById("sfx_ticking"); 
var ag = document.getElementById("sfx_bell"); 
var temaa = document.getElementById("tema");
var pilihan_team = document.getElementById('pilihan_team');
var cc =10;
var seta = 0;
var setb = 0;
var setc = 0;
var setto = 0;
var vara = 1;
var varb = 2;
var varc = 3;
var varsetto;

function needed(){
	nol();
	nol();
	seratus();
	seratus();
	saveSetto();
}

function plus30(){
	tulisan_nilais.innerHTML = pad(setto += 30);
	needed()
}
function plus20(){
	tulisan_nilais.innerHTML = pad(setto += 20);
	needed()
}
function plus15(){
	tulisan_nilais.innerHTML = pad(setto += 15);
	needed()
}
function plus10(){
	tulisan_nilais.innerHTML = pad(setto += 10);
	needed()
}
function plus7(){
	tulisan_nilais.innerHTML = pad(setto += 7);
	needed()
}
function plus5(){
	tulisan_nilais.innerHTML = pad(setto += 5);
	needed()
}

function playSfxPressed() {
	aa.volume = 0.5;
	aa.load();     
	aa.play();
}
function playSfxRight() {
	ab.load();     
	ab.play();
}
function playSfxDrumroll() {
	ac.load();     
	ac.play();
}
function playSfxWrong() {
	ad.load();     
	ad.play();
}
function playSfxWrongMax() {
	ae.load();     
	ae.play();
}
function playSfxTicking() {
	af.volume = 0.4;
	af.load();     
	af.play();
}function playSfxBell() {
	ag.load();     
	ag.play();
}

function pad(number) {
	if(number<10){
		return (number ? '00' : '') + number;
	}else if(number<100){
		return (number ? '0' : '') + number;
	}else if (number=> 100){
		return number;
	}
}

function pad_countdown(number) {
	if(number<10){
		return (number ? '0' : '') + number;
	}
}

function nol(){
	if (setto  < 0) {
		setto += 10;
	}
}
function seratus(){
	if (setto > 990) {
		setto -= 10;
	}
}

function saveSetto(){
	if (varsetto == vara) {
		seta = setto;
	}else if (varsetto == varb){
		setb = setto;
	}else if (varsetto == varc){
		setc = setto;
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
	}else if (y >= 4){
		--y;
	}else if (y == 1) {
		document.getElementById('tema').innerHTML = "Alasan Siswa terlambat :";
		op1.innerHTML = "(30) Terlambat bangun".bold();
		op2.innerHTML = "(20) Macet".bold();
		op3.innerHTML = "(15) Mogok".bold();
		op4.innerHTML = "(10) Kurang enak badan".bold();
		op5.innerHTML = "(7) Seragam belum kering".bold();
		op6.innerHTML = "(5) Antar Keluarga".bold();
	}else if (y == 2) {
		document.getElementById('tema').innerHTML = "Bagian tubuh yang bergerak saat tertawa :";
		op1.innerHTML = "(30) Mulut".bold();
		op2.innerHTML = "(20) Pipi".bold();
		op3.innerHTML = "(15) Perut".bold();
		op4.innerHTML = "(10) Bahu".bold();
		op5.innerHTML = "(7) Dada".bold();
		op6.innerHTML = "(5) Dagu".bold();
	}else if (y == 3) {
		document.getElementById('tema').innerHTML = "Tempat yang sering disebut mistis:";
		op1.innerHTML = "(30) Kuburan".bold();
		op2.innerHTML = "(20) Goa".bold();
		op3.innerHTML = "(15) Gunung".bold();
		op4.innerHTML = "(10) Hutan".bold();
		op5.innerHTML = "(7) Rumah kosong".bold();
		op6.innerHTML = "(5) Laut".bold();
	}else if (y == p) {
		document.getElementById('tema').innerHTML = "";
		op1.innerHTML = "(30) a".bold();
		op2.innerHTML = "(20) a".bold();
		op3.innerHTML = "(15) a".bold();
		op4.innerHTML = "(10) a".bold();
		op5.innerHTML = "(7) a".bold();
		op6.innerHTML = "(5) a".bold();
	}
}

window.addEventListener("keydown", checkKeyPress);
function checkKeyPress(key){
	if (key.keyCode == "49") { 
		playSfxRight();
		op1.classList.toggle("list_on");
		plus30();
	}if (key.keyCode == "50") { 
		playSfxRight();
		op2.classList.toggle("list_on");
		plus20();
	}if (key.keyCode == "51") { 
		playSfxRight();
		op3.classList.toggle("list_on");
		plus15();
	}if (key.keyCode == "52") { 
		playSfxRight();
		op4.classList.toggle("list_on");
		plus10();
	}if (key.keyCode == "53") { 
		playSfxRight();
		op5.classList.toggle("list_on");
		plus7();
	}if (key.keyCode == "54") { 
		playSfxRight();
		op6.classList.toggle("list_on");
		plus5();
	}if (key.keyCode == "83") { 
		playSfxPressed();
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
	}if (key.keyCode == "65") { 
		playSfxPressed();
		--y;
		x = 0;
	    op1.removeAttribute("class", "list_on");
		op2.removeAttribute("class", "list_on");
		op3.removeAttribute("class", "list_on");
	    op4.removeAttribute("class", "list_on");
		op5.removeAttribute("class", "list_on");
		op6.removeAttribute("class", "list_on");
		pertanyaan();
		tambah_silang();
	}if (key.keyCode == "88"){ 
		++x;
		playSfxWrong();
		tambah_silang();
	}if(key.keyCode == "90"){ 
		--x;
		tambah_silang();
	}if(key.keyCode == "27"){ 
		modal.style.display = "none";
	}if(key.keyCode == "72"){ 
		modal.style.display = "block";
	}if (key.keyCode == "219"){ 
		tulisan_nilais.innerHTML = pad(setto -= 7);
		nol();
		nol();
		seratus();
		seratus();
		saveSetto();
	}if (key.keyCode == "221"){ 
		tulisan_nilais.innerHTML = pad(setto -= 5);
		nol();
		nol();
		seratus();
		seratus();
		saveSetto();
	}if (key.keyCode == "78") {
		playSfxDrumroll();
	}if (key.keyCode == "86") { 
		    playSfxTicking();
	       var counter = 10;
   setInterval(function() {
	    counter--;
		    if (counter >= 0) {
		        span = document.getElementById("countdown_timer");
		        span.innerHTML = pad_countdown(counter) + "s";
		    }
		    if (counter === 0) {
		        document.getElementById("countdown_timer").innerHTML = "10s";
		        playSfxBell();
		        clearInterval(counter);
		    }
	    }, 1000);
	}if (key.keyCode == "56") {
		varsetto = vara;
		setto = seta;
		tulisan_nilais = tulisan_nilai_a;
		pilihan_team.innerHTML = "TEAM A"
	}if (key.keyCode == "57") {
		varsetto = varb;
		setto = setb;
		tulisan_nilais = tulisan_nilai_b;
		pilihan_team.innerHTML = "TEAM B"
	}if (key.keyCode == "48") {
		varsetto = varc;
		setto = setc;
		tulisan_nilais = tulisan_nilai_c;
		pilihan_team.innerHTML = "TEAM C"
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

