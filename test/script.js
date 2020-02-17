var d = new Date();
var jam = d.getHours();
var menit = d.getMinutes();


// var waktu1 = [07, 30] // 450
// var waktu2 = [08, 10] // 490
// var waktu3 = [08, 50] // 530
// var waktuBreak = [09, 30] // 570
// var waktu4 = [09, 40] // 580
// var waktu5 = [10, 20] // 620
// var waktu6 = [11, 00] // 660
// var waktuBreak = [11, 40] // 700
// var waktu7 = [13, 00] // 780
// var waktu8 = [13, 40] // 820
// var waktu9 = [14, 20] // 860
// var waktu10 = [15, 00] // 900

// function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);



//     document.getElementById('time').innerHTML = h + ":" + m + ":" + s;



//     var t = setTimeout(startTime, 500);

//     //change bar width
//     document.getElementById("bar").style.width = (m / 60) * 100 + "%";
// }




// if (mTot < 450) {
//     document.getElementById('judul').innerHTML = "Class hasn't started yet";
//     document.getElementById('selanjutnya').innerHTML = "next: Monday Ceremony";
//     document.getElementById("bar").style.width = "0%";
// } else if (mTot < 490) {
//     document.getElementById('judul').innerHTML = "[I] Monday Ceremony";
//     document.getElementById('selanjutnya').innerHTML = "next: Math 1";
//     document.getElementById('fTime').innerHTML = "(08:10)";
//     document.getElementById("bar").style.width = ((mTot - 450) / 40) * 100 + "%";
// } else if (mTot < 530) {
//     document.getElementById('judul').innerHTML = "[II] Math 1";
//     document.getElementById('selanjutnya').innerHTML = "next: Math 1";
//     document.getElementById('fTime').innerHTML = "(08:50)";
//     document.getElementById("bar").style.width = ((mTot - 490) / 40) * 100 + "%";
// } else if (mTot < 570) {
//     document.getElementById('judul').innerHTML = "[III] Math 1";
//     document.getElementById('selanjutnya').innerHTML = "next: Break";
//     document.getElementById('fTime').innerHTML = "(09:30)";
//     document.getElementById("bar").style.width = ((mTot - 530) / 40) * 100 + "%";
// } else if (mTot < 580) {
//     document.getElementById('judul').innerHTML = "Break";
//     document.getElementById('selanjutnya').innerHTML = "next: IELTS";
//     document.getElementById('fTime').innerHTML = "(09:40)";
//     document.getElementById("bar").style.width = ((mTot - 570) / 10) * 100 + "%";
// } else if (mTot < 620) {
//     document.getElementById('judul').innerHTML = "[IV] IELTS";
//     document.getElementById('selanjutnya').innerHTML = "next: IELTS";
//     document.getElementById('fTime').innerHTML = "(10:20)";
//     document.getElementById("bar").style.width = ((mTot - 580) / 40) * 100 + "%";
// } else if (mTot < 660) {
//     document.getElementById('judul').innerHTML = "[V] IELTS";
//     document.getElementById('selanjutnya').innerHTML = "next: Arts";
//     document.getElementById('fTime').innerHTML = "(11:00)";
//     document.getElementById("bar").style.width = ((mTot - 620) / 40) * 100 + "%";
// } else if (mTot < 700) {
//     document.getElementById('judul').innerHTML = "[VI] Arts";
//     document.getElementById('selanjutnya').innerHTML = "next: Break";
//     document.getElementById('fTime').innerHTML = "(11:40)";
//     document.getElementById("bar").style.width = ((mTot - 660) / 40) * 100 + "%";
// } else if (mTot < 780) {
//     document.getElementById('judul').innerHTML = "Break";
//     document.getElementById('selanjutnya').innerHTML = "next: Arts";
//     document.getElementById('fTime').innerHTML = "(13:00)";
//     document.getElementById("bar").style.width = ((mTot - 700) / 80) * 100 + "%";
// } else if (mTot < 820) {
//     document.getElementById('judul').innerHTML = "[VII] Arts";
//     document.getElementById('selanjutnya').innerHTML = "next: Bahasa Indonesia";
//     document.getElementById('fTime').innerHTML = "(13:40)";
//     document.getElementById("bar").style.width = ((mTot - 780) / 40) * 100 + "%";
// } else if (mTot < 860) {
//     document.getElementById('judul').innerHTML = "[IX] Bahasa Indonesia";
//     document.getElementById('selanjutnya').innerHTML = "next: Bahasa Indonesia";
//     document.getElementById('fTime').innerHTML = "(14:20)";
//     document.getElementById("bar").style.width = ((mTot - 820) / 40) * 100 + "%";
// } else if (mTot < 900) {
//     document.getElementById('judul').innerHTML = "[X] Bahasa Indonesia";
//     document.getElementById('selanjutnya').innerHTML = "next: -";
//     document.getElementById('fTime').innerHTML = "(15:00)";
//     document.getElementById("bar").style.width = ((mTot - 860) / 40) * 100 + "%";
// } else if (mTot > 900) {
//     document.getElementById('judul').innerHTML = "School is over";
//     document.getElementById('fTime').innerHTML = "(:)";
//     document.getElementById("bar").style.width = "100%";
// }


//=============================== ROSTER ===============================





monday = {
    "jam1": "Monday Ceremony",
    "jam2": "Math 1",
    "jam3": "Math 1",
    "jam4": "IELTS",
    "jam5": "IELTS",
    "jam6": "Arts",
    "jam7": "Arts",
    "jam8": "Bahasa Indonesia",
    "jam9": "Bahasa Indonesia",
    "jam10": "Subject Matter Consultation"
}

tuesday = {
    "jam1": "English",
    "jam2": "English",
    "jam3": "Physics",
    "jam4": "Physics",
    "jam5": "Bahasa Indonesia",
    "jam6": "Bahasa Indonesia",
    "jam7": "Math 2",
    "jam8": "Math 2",
    "jam9": "Math 2",
    "jam10": "Subject Matter Consultation"
}

wednesday = {
    "jam1": "ICT",
    "jam2": "ICT",
    "jam3": "Math 1",
    "jam4": "Math 1",
    "jam5": "Chemistry",
    "jam6": "Chemistry",
    "jam7": "Math 2",
    "jam8": "Biology",
    "jam9": "Biology",
    "jam10": "Subject Matter Consultation"
}

thursday = {
    "jam1": "Sport",
    "jam2": "Sport",
    "jam3": "Economy",
    "jam4": "Economy",
    "jam5": "Physics",
    "jam6": "Physics",
    "jam7": "History",
    "jam8": "History",
    "jam9": "PPKn",
    "jam10": "English Meeting"
}

friday = {
    "jam1": "Clean and Healthy Jum'at",
    "jam2": "Biology",
    "jam3": "Biology",
    "jam4": "Chemistry",
    "jam5": "Chemistry",
    "jam6": "PPKn",
    "jam7": "Religion",
    "jam8": "Religion",
    "jam9": "Religion",
    "jam10": "Subject Matter Consultation"
}

//=============================== ROSTER ===============================












//=============================== TEST FIELD ===============================


var waktu1 = [07, 30] // 450
var waktu2 = [08, 10] // 490
var waktu3 = [08, 50] // 530
var waktuBreak = [09, 30] // 570
var waktu4 = [09, 40] // 580
var waktu5 = [10, 20] // 620
var waktu6 = [11, 00] // 660
var waktuBreak = [11, 40] // 700
var waktu7 = [13, 00] // 780
var waktu8 = [13, 40] // 820
var waktu9 = [14, 20] // 860
var waktu10 = [15, 00] // 900

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var harib = today.getDay();
    var hBaru = h * 60;
    var mTot = hBaru + m;

    // console.log(harib)

    m = checkTime(m);
    s = checkTime(s);

    if (harib == 1) {
        hariNama = "monday";
    } else if (harib == 2) {
        hariNama = "tuesday";
    } else if (harib == 3) {
        hariNama = "wednesday";
    } else if (harib == 4) {
        hariNama = "thursday";
    } else if (harib == 5) {
        hariNama = "friday";
    };

    if (mTot < 450) {
        document.getElementById('judul').innerHTML = "Class hasn't started yet";
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam1');
        document.getElementById("bar").style.width = "0%";
    } else if (mTot < 490) {

        document.getElementById('judul').innerHTML = "[I] " + eval(hariNama + '.jam1');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam2');
        document.getElementById('fTime').innerHTML = "(08:10)";
        document.getElementById("bar").style.width = ((mTot - 450) / 40) * 100 + "%";
    } else if (mTot < 530) {
        document.getElementById('judul').innerHTML = "[II] " + eval(hariNama + '.jam2');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam3');
        document.getElementById('fTime').innerHTML = "(08:50)";
        document.getElementById("bar").style.width = ((mTot - 490) / 40) * 100 + "%";
    } else if (mTot < 570) {
        document.getElementById('judul').innerHTML = "[III] " + eval(hariNama + '.jam3');
        document.getElementById('selanjutnya').innerHTML = "next: Break";
        document.getElementById('fTime').innerHTML = "(09:30)";
        document.getElementById("bar").style.width = ((mTot - 530) / 40) * 100 + "%";
    } else if (mTot < 580) {
        document.getElementById('judul').innerHTML = "Break";
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam4');
        document.getElementById('fTime').innerHTML = "(09:40)";
        document.getElementById("bar").style.width = ((mTot - 570) / 10) * 100 + "%";
    } else if (mTot < 620) {
        document.getElementById('judul').innerHTML = "[IV] " + eval(hariNama + '.jam4');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam5');
        document.getElementById('fTime').innerHTML = "(10:20)";
        document.getElementById("bar").style.width = ((mTot - 580) / 40) * 100 + "%";
    } else if (mTot < 660) {
        document.getElementById('judul').innerHTML = "[V] " + eval(hariNama + '.jam5');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam6');
        document.getElementById('fTime').innerHTML = "(11:00)";
        document.getElementById("bar").style.width = ((mTot - 620) / 40) * 100 + "%";
    } else if (mTot < 700) {
        document.getElementById('judul').innerHTML = "[VI] " + eval(hariNama + '.jam6');
        document.getElementById('selanjutnya').innerHTML = "next: Break";
        document.getElementById('fTime').innerHTML = "(11:40)";
        document.getElementById("bar").style.width = ((mTot - 660) / 40) * 100 + "%";
    } else if (mTot < 780) {
        document.getElementById('judul').innerHTML = "Break";
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam7');
        document.getElementById('fTime').innerHTML = "(13:00)";
        document.getElementById("bar").style.width = ((mTot - 700) / 80) * 100 + "%";
    } else if (mTot < 820) {
        document.getElementById('judul').innerHTML = "[VII] " + eval(hariNama + '.jam7');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam8');
        document.getElementById('fTime').innerHTML = "(13:40)";
        document.getElementById("bar").style.width = ((mTot - 780) / 40) * 100 + "%";
    } else if (mTot < 860) {
        document.getElementById('judul').innerHTML = "[IX] " + eval(hariNama + '.jam8');
        document.getElementById('selanjutnya').innerHTML = "next: " + eval(hariNama + '.jam9');
        document.getElementById('fTime').innerHTML = "(14:20)";
        document.getElementById("bar").style.width = ((mTot - 820) / 40) * 100 + "%";
    } else if (mTot < 900) {
        document.getElementById('judul').innerHTML = "[X] " + eval(hariNama + '.jam9');
        document.getElementById('selanjutnya').innerHTML = "next: -";
        document.getElementById('fTime').innerHTML = "(15:00)";
        document.getElementById("bar").style.width = ((mTot - 860) / 40) * 100 + "%";
    } else if (mTot > 900) {
        document.getElementById('judul').innerHTML = "School is over";
        document.getElementById('selanjutnya').innerHTML = "";
        document.getElementById('fTime').innerHTML = "";
        document.getElementById("bar").style.width = "100%";
    };
    var t = setTimeout(startTime, 500);
    document.getElementById('time').innerHTML = "It's " + h + ":" + m;

    // change bar width
    // document.getElementById("bar").style.width = (m / 60) * 100 + "%";
}


//=============================== TEST FIELD ===============================


function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}


//