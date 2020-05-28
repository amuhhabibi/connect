var d = new Date();
var jam = d.getHours();
var menit = d.getMinutes();

//=============================== ROSTER ===============================

const monday = {
  jam1: "Monday Ceremony <sub>Mul</sub>",
  jam2: "Math 1 <sub>II.02</sub>",
  jam3: "Math 1 <sub>II.02</sub>",
  jam4: "IELTS <sub>II.02</sub>",
  jam5: "IELTS <sub>II.02</sub>",
  jam6: "Arts <sub>I.01</sub>",
  jam7: "Arts <sub>I.01</sub>",
  jam8: "Bahasa Indonesia <sub>Library</sub>",
  jam9: "Bahasa Indonesia <sub>Library</sub>",
  jam10: "Subject Matter Consultation"
};

const tuesday = {
  jam1: "English <sub>III.02</sub>",
  jam2: "English <sub>III.02</sub>",
  jam3: "Physics <sub>III.02</sub>",
  jam4: "Physics <sub>III.02</sub>",
  jam5: "Bahasa Indonesia <sub>Library</sub>",
  jam6: "Bahasa Indonesia <sub>Library</sub>",
  jam7: "Math 2 <sub>L.IPA</sub>",
  jam8: "Math 2 <sub>L.IPA</sub>",
  jam9: "Math 2 <sub>L.IPA</sub>",
  jam10: "English Meeting"
};

const wednesday = {
  jam1: "ICT <sub>L.KOM</sub>",
  jam2: "ICT <sub>L.KOM</sub>",
  jam3: "Math 1 <sub>III.02</sub>",
  jam4: "Math 1 <sub>III.02</sub>",
  jam5: "Chemistry <sub>L.IPA</sub>",
  jam6: "Chemistry <sub>L.IPA</sub>",
  jam7: "Math 2 <sub>L.IPA</sub>",
  jam8: "Biology <sub>L.IPA</sub>",
  jam9: "Biology <sub>L.IPA</sub>",
  jam10: "Subject Matter Consultation"
};

const thursday = {
  jam1: "Sport <sub>TELKOM</sub>",
  jam2: "Sport <sub>TELKOM</sub>",
  jam3: "Economy <sub>III.02</sub>",
  jam4: "Economy <sub>III.02</sub>",
  jam5: "Physics <sub>L.IPA</sub>",
  jam6: "Physics <sub>L.IPA</sub>",
  jam7: "History <sub>Library</sub>",
  jam8: "History <sub>Library</sub>",
  jam9: "PPKn <sub>II.02</sub>",
  jam10: "Subject Matter Consultation"
};

const friday = {
  jam1: "Clean and Healthy Jum'at",
  jam2: "Biology <sub>L.IPA</sub>",
  jam3: "Biology <sub>L.IPA</sub>",
  jam4: "Chemistry <sub>L.IPA</sub>",
  jam5: "Chemistry <sub>L.IPA</sub>",
  jam6: "PPKn <sub>III.02</sub>",
  jam7: "Religion <sub>Mul</sub>",
  jam8: "Religion <sub>Mul</sub>",
  jam9: "Religion <sub>Mul</sub>",
  jam10: "Subject Matter Consultation"
};

//^^^^^^^=============================== ROSTER ===============================^^^^^

var waktu1 = [07, 30]; // 450
var waktu2 = [08, 10]; // 490
var waktu3 = [08, 50]; // 530
var waktuBreak = [09, 30]; // 570
var waktu4 = [09, 40]; // 580
var waktu5 = [10, 20]; // 620
var waktu6 = [11, 00]; // 660
var waktuBreak = [11, 40]; // 700
var waktu7 = [13, 00]; // 780
var waktu8 = [13, 40]; // 820
var waktu9 = [14, 20]; // 860
var waktu10 = [15, 00]; // 900

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var harib = today.getDay();
  var hBaru = h * 60;
  var mTot = hBaru + m;

  m = checkTime(m);
  s = checkTime(s);

  if (harib == 1) {
    hariNama = "monday";
    document.getElementById("isiModal").innerHTML = Object.values(
      eval(hariNama)
    ).join("<br>");
  } else if (harib == 2) {
    hariNama = "tuesday";
    document.getElementById("isiModal").innerHTML = Object.values(
      eval(hariNama)
    ).join("<br>");
  } else if (harib == 3) {
    hariNama = "wednesday";
    document.getElementById("isiModal").innerHTML = Object.values(
      eval(hariNama)
    ).join("<br>");
  } else if (harib == 4) {
    hariNama = "thursday";
    document.getElementById("isiModal").innerHTML = Object.values(
      eval(hariNama)
    ).join("<br>");
  } else if (harib == 5) {
    hariNama = "friday";
    document.getElementById("isiModal").innerHTML = Object.values(
      eval(hariNama)
    ).join("<br>");
  } else {
    document.getElementById("modal-button").style.display = "none";
  }

  if (harib == 1 || harib == 5) {
    if (mTot < 450) {
      document.getElementById("judul").innerHTML = "Class hasn't started yet";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam1");
      document.getElementById("fTime").innerHTML = "(07:30)";
      document.getElementById("bar").style.width = "0%";
    } else if (mTot < 490) {
      document.getElementById("judul").innerHTML =
        "[I] " + eval(hariNama + ".jam1");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam2");
      document.getElementById("fTime").innerHTML = "(08:10)";
      document.getElementById("bar").style.width =
        ((mTot - 450) / 40) * 100 + "%";
    } else if (mTot < 530) {
      document.getElementById("judul").innerHTML =
        "[II] " + eval(hariNama + ".jam2");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam3");
      document.getElementById("fTime").innerHTML = "(08:50)";
      document.getElementById("bar").style.width =
        ((mTot - 490) / 40) * 100 + "%";
    } else if (mTot < 570) {
      document.getElementById("judul").innerHTML =
        "[III] " + eval(hariNama + ".jam3");
      document.getElementById("selanjutnya").innerHTML =
        "next: Break then " + eval(hariNama + ".jam4");
      document.getElementById("fTime").innerHTML = "(09:30)";
      document.getElementById("bar").style.width =
        ((mTot - 530) / 40) * 100 + "%";
    } else if (mTot < 580) {
      document.getElementById("judul").innerHTML = "Break";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam4");
      document.getElementById("fTime").innerHTML = "(09:40)";
      document.getElementById("bar").style.width =
        ((mTot - 570) / 10) * 100 + "%";
    } else if (mTot < 620) {
      document.getElementById("judul").innerHTML =
        "[IV] " + eval(hariNama + ".jam4");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam5");
      document.getElementById("fTime").innerHTML = "(10:20)";
      document.getElementById("bar").style.width =
        ((mTot - 580) / 40) * 100 + "%";
    } else if (mTot < 660) {
      document.getElementById("judul").innerHTML =
        "[V] " + eval(hariNama + ".jam5");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam6");
      document.getElementById("fTime").innerHTML = "(11:00)";
      document.getElementById("bar").style.width =
        ((mTot - 620) / 40) * 100 + "%";
    } else if (mTot < 700) {
      document.getElementById("judul").innerHTML =
        "[VI] " + eval(hariNama + ".jam6");
      document.getElementById("selanjutnya").innerHTML =
        "next: Break then " + eval(hariNama + ".jam7");
      document.getElementById("fTime").innerHTML = "(11:40)";
      document.getElementById("bar").style.width =
        ((mTot - 660) / 40) * 100 + "%";
    } else if (mTot < 780) {
      document.getElementById("judul").innerHTML = "Break";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam7");
      document.getElementById("fTime").innerHTML = "(13:00)";
      document.getElementById("bar").style.width =
        ((mTot - 700) / 80) * 100 + "%";
    } else if (mTot < 820) {
      document.getElementById("judul").innerHTML =
        "[VII] " + eval(hariNama + ".jam7");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam8");
      document.getElementById("fTime").innerHTML = "(13:40)";
      document.getElementById("bar").style.width =
        ((mTot - 780) / 40) * 100 + "%";
    } else if (mTot < 860) {
      document.getElementById("judul").innerHTML =
        "[[VII] " + eval(hariNama + ".jam8");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam9");
      document.getElementById("fTime").innerHTML = "(14:20)";
      document.getElementById("bar").style.width =
        ((mTot - 820) / 40) * 100 + "%";
    } else if (mTot < 900) {
      document.getElementById("judul").innerHTML =
        "[IX] " + eval(hariNama + ".jam9");
      document.getElementById("selanjutnya").innerHTML = "next: Pulang";
      document.getElementById("fTime").innerHTML = "(15:00)";
      document.getElementById("bar").style.width =
        ((mTot - 860) / 40) * 100 + "%";
    } else if (mTot > 900) {
      document.getElementById("judul").innerHTML = "School is over";
      document.getElementById("selanjutnya").innerHTML = "";
      document.getElementById("fTime").innerHTML = "";
      document.getElementById("bar").style.width = "100%";
      document.getElementById("modal-button").style.display = "none";
    }
  } else if (harib == 6) {
    document.getElementById("judul").innerHTML = "It's Saturday dumbass";
    document.getElementById("selanjutnya").innerHTML = "";
    document.getElementById("fTime").innerHTML = "";
    document.getElementById("bar").style.width = "100%";
  } else if (harib == 0) {
    document.getElementById("judul").innerHTML = "It's Monday dumbass";
    document.getElementById("selanjutnya").innerHTML = "";
    document.getElementById("fTime").innerHTML = "";
    document.getElementById("bar").style.width = "100%";
  } else {
    if (mTot < 450) {
      document.getElementById("judul").innerHTML = "Class hasn't started yet";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam1");
      document.getElementById("fTime").innerHTML = "(07:30)";
      document.getElementById("bar").style.width = "0%";
    } else if (mTot < 490) {
      document.getElementById("judul").innerHTML =
        "[I] " + eval(hariNama + ".jam1");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam2");
      document.getElementById("fTime").innerHTML = "(08:10)";
      document.getElementById("bar").style.width =
        ((mTot - 450) / 40) * 100 + "%";
    } else if (mTot < 530) {
      document.getElementById("judul").innerHTML =
        "[II] " + eval(hariNama + ".jam2");
      document.getElementById("selanjutnya").innerHTML =
        "next: Break then " + eval(hariNama + ".jam4");
      document.getElementById("fTime").innerHTML = "(08:50)";
      document.getElementById("bar").style.width =
        ((mTot - 490) / 40) * 100 + "%";
    } else if (mTot < 540) {
      document.getElementById("judul").innerHTML = "Break";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam4");
      document.getElementById("fTime").innerHTML = "(09:40)";
      document.getElementById("bar").style.width =
        ((mTot - 570) / 10) * 100 + "%";
    } else if (mTot < 580) {
      document.getElementById("judul").innerHTML =
        "[III] " + eval(hariNama + ".jam3");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam4");
      document.getElementById("fTime").innerHTML = "(09:30)";
      document.getElementById("bar").style.width =
        ((mTot - 530) / 40) * 100 + "%";
    } else if (mTot < 620) {
      document.getElementById("judul").innerHTML =
        "[IV] " + eval(hariNama + ".jam4");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam5");
      document.getElementById("fTime").innerHTML = "(10:20)";
      document.getElementById("bar").style.width =
        ((mTot - 580) / 40) * 100 + "%";
    } else if (mTot < 660) {
      document.getElementById("judul").innerHTML =
        "[V] " + eval(hariNama + ".jam5");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam6");
      document.getElementById("fTime").innerHTML = "(11:00)";
      document.getElementById("bar").style.width =
        ((mTot - 620) / 40) * 100 + "%";
    } else if (mTot < 700) {
      document.getElementById("judul").innerHTML =
        "[VI] " + eval(hariNama + ".jam6");
      document.getElementById("selanjutnya").innerHTML =
        "next: Break then " + eval(hariNama + ".jam7");
      document.getElementById("fTime").innerHTML = "(11:40)";
      document.getElementById("bar").style.width =
        ((mTot - 660) / 40) * 100 + "%";
    } else if (mTot < 780) {
      document.getElementById("judul").innerHTML = "Break";
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam7");
      document.getElementById("fTime").innerHTML = "(13:00)";
      document.getElementById("bar").style.width =
        ((mTot - 700) / 80) * 100 + "%";
    } else if (mTot < 820) {
      document.getElementById("judul").innerHTML =
        "[VII] " + eval(hariNama + ".jam7");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam8");
      document.getElementById("fTime").innerHTML = "(13:40)";
      document.getElementById("bar").style.width =
        ((mTot - 780) / 40) * 100 + "%";
    } else if (mTot < 860) {
      document.getElementById("judul").innerHTML =
        "[VII] " + eval(hariNama + ".jam8");
      document.getElementById("selanjutnya").innerHTML =
        "next: " + eval(hariNama + ".jam9");
      document.getElementById("fTime").innerHTML = "(14:20)";
      document.getElementById("bar").style.width =
        ((mTot - 820) / 40) * 100 + "%";
    } else if (mTot < 900) {
      document.getElementById("judul").innerHTML =
        "[IX] " + eval(hariNama + ".jam9");
      document.getElementById("selanjutnya").innerHTML = "next: Pulang";
      document.getElementById("fTime").innerHTML = "(15:00)";
      document.getElementById("bar").style.width =
        ((mTot - 860) / 40) * 100 + "%";
    } else if (mTot > 900) {
      document.getElementById("judul").innerHTML = "School is over";
      document.getElementById("selanjutnya").innerHTML = "";
      document.getElementById("fTime").innerHTML = "";
      document.getElementById("bar").style.width = "100%";
      document.getElementById("modal-button").style.display = "none";
    }
  }

  var t = setTimeout(startTime, 500);
  document.getElementById("time").innerHTML = "It's " + h + ":" + m;

  // change bar width
  // document.getElementById("bar").style.width = (m / 60) * 100 + "%";
}

//=============================== TEST FIELD ===============================
//=============================== TEST FIELD ===============================

//=============================== TEST FIELD ===============================
//=============================== TEST FIELD ===============================

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

//
