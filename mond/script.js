function stars(){
  let count = 400;
  let bege = document.querySelector('.bege');
  let i = 0;
  while(i < count){
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);
    let duration = Math.random() * 20;
    let size = Math.random() * 2;

    star.style.left = x+'px';
    star.style.top = y+'px';
    star.style.width = 1+size+'px';
    star.style.height = 1+size+'px';

    star.style.animationDuration = 5+duration+'s';
    star.style.animationDelay = duration+'s';

    bege.appendChild(star);
    i++
  };
};
stars();

(function () {
  var d = new Date().getDate();
  var m = document.querySelectorAll("#contain_moon div");
  var a = new XMLHttpRequest();
  var url = "https://www.icalendar37.net/lunar/api/?lang=de&month=" + (new Date().getMonth() + 1) + "&year=" + (
      new Date().getFullYear()) +
    "&size=60vh&lightColor=rgb(104, 109, 143)&shadeColor=rgb(34, 38, 69)&t&LDZ=" + new Date(new Date()
      .getFullYear(), new Date().getMonth(), 1) / 1000 + "";
  m[1].style.height = "60vh";
  a.onreadystatechange = function () {
    if (a.readyState == 4 && a.status == 200) {
      var b = JSON.parse(a.responseText);
      m[1].innerHTML = b.phase[d].svg;
      if (typeof moon_widget_loaded == "function") moon_widget_loaded(b);
      document.getElementById("neks").innerHTML = b.phase[d].npWidget
      const dd = new Date();
      const bulan = dd.getMonth()+1;
      document.getElementById("tgl").innerHTML = dd.getDate() + "." + bulan + "." + dd.getFullYear();
    }
  };
  a.open("GET", url, true);
  a.send()
})()

