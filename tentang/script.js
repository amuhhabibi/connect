const setTheme = theme => document.documentElement.className = theme;

let x = document.documentElement.className;


function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let currentTheme = getCookie("theme");
  if (currentTheme != "") {
        var element = document.body;
        element.classList.toggle("light-mode");
  } else {
          
    }
}


function cekcekduls(){
        var x = document.getElementById('badan').className;
        if (x == "light-mode"){
                setCookie("theme", "light-mode", 365);
        }else{
                document.cookie = "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        }
}


function hello(){
        var element = document.body;
        const button = document.querySelector(".fa-yin-yang");
        element.classList.toggle("light-mode");
        button.classList.toggle("toggled");
        button.classList.toggle("toggledOff");
        cekcekduls();
}
function mundur(){
  window.location.href = '../'; 
}