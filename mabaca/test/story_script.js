var txt;

function preload(){
	txt = loadStrings("mantora.txt");
}

function setup(){
	noCanvas();
	createP(join(txt, "<br><br>"));
}