
  var d = new Date();
  var bln = eval(d.getMonth() + 1);
  var tgl = d.getDate();
  var thn = d.getFullYear();
  var jam = d.getHours();
  var men = d.getMinutes();

  var newDate = String(padZero(tgl) + "/" + padZero(bln) + "/" + thn);
  
  var jamMenit = jam * 60;
  var waktuMenit = jamMenit + men;

var hari = {
  "28/05/2020":["08:30","11:30"], 
  "29/05/2020":["09:30","12:30"]
}

function padZero(i) {
  if (i < 10) {
    i = "0" + i;
  } // add zero in front of numbers < 10
  return i;
}

function cekTanggal(){

  var d = new Date();
  var bln = eval(d.getMonth() + 1);
  var tgl = d.getDate();
  var thn = d.getFullYear();
  var jam = d.getHours();
  var men = d.getMinutes();

  var newDate = String(padZero(tgl) + "/" + padZero(bln) + "/" + thn);
  
  var jamMenit = jam * 60;
  var waktuMenit = jamMenit + men;

  for (var h in Object.keys(hari)) {
    if (newDate == Object.keys(hari)[h]){
      var mulai = hari[Object.keys(hari)[h]][0];
      var mulaiMenit = Number(String(mulai).split(":")[0])*60 + Number(String(mulai).split(":")[1]);
      var selesai = hari[Object.keys(hari)[h]][1];
      var selesaiMenit = Number(String(selesai).split(":")[0])*60 + Number(String(selesai).split(":")[1]);
      // sebelum mulai
      if (mulaiMenit > waktuMenit){
        document.getElementById("time").innerHTML = "Class hasn't started yet";
        document.getElementById("timeLeft").innerHTML = padZero(jam) + ":" + padZero(men);
        document.getElementById("bar").style.width = "0%";
      }
      // selama kelas
      else if(waktuMenit >= mulaiMenit && waktuMenit < selesaiMenit){
        bibir = ((waktuMenit-mulaiMenit) / (selesaiMenit-mulaiMenit))*100 + "%";
        document.getElementById("time").innerHTML = "You should be in class now";
        document.getElementById("timeLeft").innerHTML = padZero(jam) + ":" + padZero(men);
        document.getElementById("bar").style.width = bibir;
      }
      // setelah kelas
      else{
        document.getElementById("time").innerHTML = "See you at the next meeting!";
        document.getElementById("timeLeft").innerHTML = padZero(jam) + ":" + padZero(men);
        document.getElementById("bar").style.width = "100%";
      }
    }else{
      // console.log("somethings wrong")
      null
    }
  }
  // console.log(newDate)
  var t = setTimeout(cekTanggal, 1000);
}

cekTanggal();