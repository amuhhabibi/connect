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
        try{
          var ddd = Object.keys(hari)[Number(h)+1].split("/");
          var bbb = ddd[1] + "/" + ddd[0] + "/" + ddd[2];
          var date2 = new Date(bbb);
          var diffTime = Math.abs(date2 - d);
          var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

          if (diffDays == 1){
            document.getElementById("time").innerHTML = "See you tomorrow!";
          }else if (diffDays == 2){
            document.getElementById("time").innerHTML = "See you in two days!";
          }else if (diffDays == 3){
            document.getElementById("time").innerHTML = "See you in three days!";
          }else if (diffDays == 4){
            document.getElementById("time").innerHTML = "See you in four days!";
          }else if (diffDays == 5){
            document.getElementById("time").innerHTML = "See you in five days!";
          }else if (diffDays == 6){
            document.getElementById("time").innerHTML = "See you in six days!";
          }else if (diffDays == 7){
            document.getElementById("time").innerHTML = "See you in a week!";
          }else if (diffDays > 7){
            document.getElementById("time").innerHTML = "See you in " + diffDays + " days";
          }else{
            document.getElementById("time").innerHTML = "No schedule is published";
          }
          document.getElementById("timeLeft").innerHTML = padZero(jam) + ":" + padZero(men);
          document.getElementById("bar").style.width = "100%";
        }catch(err){
          document.getElementById("time").innerHTML = "No schedule is published";
          document.getElementById("timeLeft").innerHTML = padZero(jam) + ":" + padZero(men);
        }
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