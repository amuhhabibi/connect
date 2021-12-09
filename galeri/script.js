document.documentElement.className = 'light';
const setTheme = theme => document.documentElement.className = theme;

let x = document.documentElement.className;

function hello(){
        var element = document.body;
        element.classList.toggle("dark-mode");
}