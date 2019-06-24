var txt;

function preload(){
	txt = loadStrings("mantora.txt");
}

function setup(){
	noCanvas();
	document.getElementById("story").innerHTML = join(txt, "<br><br>");
}