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
var aa = document.getElementById("sfx_pressed"); 
var ab = document.getElementById("sfx_right"); 
var ac = document.getElementById("sfx_drumroll"); 
var ad = document.getElementById("sfx_wrong"); 
var ae = document.getElementById("sfx_wrong_max"); 
var temaa = document.getElementById("tema");

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

function pad(number) {
	if(number<10){
		return (number ? '00' : '') + number;
	}else if(number<100){
		return (number ? '0' : '') + number;
	}else if (number=> 100){
		return number;
	}
}

function nolf(){
	if (f == 0) {
		document.getElementById("nilai_a").innerHTML = "000";
	}else if (f == -10) {
		f += 10;
	}
}
function seratusf(){
	if (f == 990) {
		f -= 10;
	}
}

function nolg(){
	if (g == 0) {
		document.getElementById("nilai_b").innerHTML = "000";
	}else if (g == -10) {
		g += 10;
	}
}
function seratusg(){
	if (g == 990) {
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
	}else if (y >= 14){
		--y;
	}else if (y == 1) {
		document.getElementById('tema').innerHTML = "Bagian tubuh yang bergerak saat tertawa :";
		op1.innerHTML = "(30) Mulut".bold();
		op2.innerHTML = "Pipi".bold();
		op3.innerHTML = "Perut".bold();
		op4.innerHTML = "Bahu".bold();
		op5.innerHTML = "Dada".bold();
		op6.innerHTML = "Dagu".bold();
	}else if (y == 2) {
		document.getElementById('tema').innerHTML = "Jenis binatang yang berbisa :";
		op1.innerHTML = "(30) Ular".bold();
		op2.innerHTML = "(20) Kelabang".bold();
		op3.innerHTML = "(15) Laba-laba".bold();
		op4.innerHTML = "(10) Tawon".bold();
		op5.innerHTML = "(7) Lebah".bold();
		op6.innerHTML = "(5) Kalajengking".bold();
	}else if (y == 3) {
		document.getElementById('tema').innerHTML = "Tempat untuk bersandar :";
		op1.innerHTML = "(30) Tiang listrik".bold();
		op2.innerHTML = "(20) Mobil".bold();
		op3.innerHTML = "(15) Kursi".bold();
		op4.innerHTML = "(10) Pintu".bold();
		op5.innerHTML = "(7) Tembok".bold();
		op6.innerHTML = "(5) Punggung orang".bold();
	}else if (y == 4) {
		document.getElementById('tema').innerHTML = "Tempat yang sering disebut mistik:";
		op1.innerHTML = "(30) Kuburan".bold();
		op2.innerHTML = "(20) Goa".bold();
		op3.innerHTML = "(15) Gunung".bold();
		op4.innerHTML = "(10) Hutan".bold();
		op5.innerHTML = "(7) Rumah tua".bold();
		op6.innerHTML = "(5) Laut".bold();
	}else if (y == 5) {
		document.getElementById('tema').innerHTML = "Hal yang dilakukan saat menunggu antrian :";
		op1.innerHTML = "(30) Main HP".bold();
		op2.innerHTML = "(20) Melihat-lihat".bold();
		op3.innerHTML = "(15) Ngobrol".bold();
		op4.innerHTML = "(10) Cek uang".bold();
		op5.innerHTML = "(7) Cek belanjaan".bold();
		op6.innerHTML = "(5) Bengong".bold();
	}else if (y == 6) {
		document.getElementById('tema').innerHTML = "Hewan dengan wajah yang seram :";
		op1.innerHTML = "(30) Harimau".bold();
		op2.innerHTML = "(20) Gorilla".bold();
		op3.innerHTML = "(15) Monyet".bold();
		op4.innerHTML = "(10) Iguana".bold();
		op5.innerHTML = "(7) Buaya".bold();
		op6.innerHTML = "(5) Serigala".bold();
	}else if (y == 7) {
		document.getElementById('tema').innerHTML = "Pujian orang tua pada anaknya yang baru cukur :";
		op1.innerHTML = "(30) Ganteng".bold();
		op2.innerHTML = "(20) Bersih".bold();
		op3.innerHTML = "(15) Rapi".bold();
		op4.innerHTML = "(10) Macho".bold();
		op5.innerHTML = "(7) Bagus".bold();
		op6.innerHTML = "(5) Keren".bold();
	}else if (y == 8) {
		document.getElementById('tema').innerHTML = "Tempat guru mempersiapkan materi pelajaran :";
		op1.innerHTML = "(30) Rumah".bold();
		op2.innerHTML = "(20) Café".bold();
		op3.innerHTML = "(15) Sekolah".bold();
		op4.innerHTML = "(10) Kampus".bold();
		op5.innerHTML = "(7) a".bold();
		op6.innerHTML = "(5) a".bold();
	}else if (y == 9) {
		document.getElementById('tema').innerHTML = "Pujian Guru saat muridnya mendapat nilai sempurna :";
		op1.innerHTML = "(30) Mantap".bold();
		op2.innerHTML = "(20) Bagus".bold();
		op3.innerHTML = "(15) Pertahankan".bold();
		op4.innerHTML = "(10) a".bold();
		op5.innerHTML = "(7) a".bold();
		op6.innerHTML = "(5) a".bold();
	}else if (y == 10) {
		document.getElementById('tema').innerHTML = "Siswa paling sering terlambat :";
		op1.innerHTML = "(30) Dika".bold();
		op2.innerHTML = "(20) Ade".bold();
		op3.innerHTML = "(15) Lyvia".bold();
		op4.innerHTML = "(10) Tita".bold();
		op5.innerHTML = "(7) a".bold();
		op6.innerHTML = "(5) a".bold();
	}else if (y == 11) {
		document.getElementById('tema').innerHTML = "Alasan Siswa terlambat :";
		op1.innerHTML = "(30) Terlambat bangun".bold();
		op2.innerHTML = "(20) Macet".bold();
		op3.innerHTML = "(15) Mogok".bold();
		op4.innerHTML = "(10) Kurang enak badan".bold();
		op5.innerHTML = "(7) Seragam belum kering".bold();
		op6.innerHTML = "(5) a".bold();
	}else if (y == 12) {
		document.getElementById('tema').innerHTML = "Jika siswa terlambat, hal yang perlu dilakukan padanya :";
		op1.innerHTML = "(30) Dikeluarkan".bold();
		op2.innerHTML = "(20) Hukum bersihkan WC".bold();
		op3.innerHTML = "(15) Biarkan".bold();
		op4.innerHTML = "(10) a".bold();
		op5.innerHTML = "(7) a".bold();
		op6.innerHTML = "(5) a".bold();
	}else if (y == 13) {
		document.getElementById('tema').innerHTML = "Kegiatan yang dilakukan Guru pada weekend :";
		op1.innerHTML = "(30) Tidur".bold();
		op2.innerHTML = "(20) Olahraga".bold();
		op3.innerHTML = "(15) Cari Duit".bold();
		op4.innerHTML = "(10) Kumpul sama keluarga".bold();
		op5.innerHTML = "(7) Membersihkan".bold();
		op6.innerHTML = "(5) a".bold();
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
	}else if (key.keyCode == "50") { 
		playSfxRight();
		op2.classList.toggle("list_on");
	}else if (key.keyCode == "51") { 
		playSfxRight();
		op3.classList.toggle("list_on");
	}else if (key.keyCode == "52") { 
		playSfxRight();
		op4.classList.toggle("list_on");
	}else if (key.keyCode == "53") { 
		playSfxRight();
		op5.classList.toggle("list_on");
	}else if (key.keyCode == "54") { 
		playSfxRight();
		op6.classList.toggle("list_on");
	}else if (key.keyCode == "83") { 
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
	}else if (key.keyCode == "65") { 
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
	}else if (key.keyCode == "88"){ 
		++x;
		playSfxWrong();
		tambah_silang();
	}else if(key.keyCode == "90"){ 
		--x;
		tambah_silang();
	}else if(key.keyCode == "27"){ 
		modal.style.display = "none";
	}else if(key.keyCode == "77"){ 
		modal.style.display = "block";
	}else if (key.keyCode == "82"){ 
		nilai_a.innerHTML = pad(f += 30);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "84"){ 
		nilai_a.innerHTML = pad(f += 20);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "89"){ 
		nilai_a.innerHTML = pad(f += 15);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "85"){ 
		nilai_a.innerHTML = pad(f += 10);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "73"){ 
		nilai_a.innerHTML = pad(f += 7);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "79"){ 
		nilai_a.innerHTML = pad(f += 5);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "80"){ 
		nilai_a.innerHTML = pad(f -= 7);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "219"){ 
		nilai_a.innerHTML = pad(f -= 5);
		nolf();
		nolf();
		seratusf();
		seratusf();
	}else if (key.keyCode == "70"){ 
		nilai_b.innerHTML = pad(g += 30);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "71"){ 
		nilai_b.innerHTML = pad(g += 20);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "72"){ 
		nilai_b.innerHTML = pad(g += 15);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "74"){ 
		nilai_b.innerHTML = pad(g += 10);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "75"){ 
		nilai_b.innerHTML = pad(g += 7);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "76"){ 
		nilai_b.innerHTML = pad(g += 5);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "186"){ 
		nilai_b.innerHTML = pad(g -= 7);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "222"){ 
		nilai_b.innerHTML = pad(g -= 5);
		nolg();
		nolg();
		seratusg();
		seratusg();
	}else if (key.keyCode == "78") {
		playSfxDrumroll();
	}else if (key.keyCode == "66") { 
		temaa.classList.toggle("tema_on");
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


