var txt;
function preload(){
	txt = loadStrings("mantora.txt");
}

function setup(){
	noCanvas();
	console.log(txt);
}