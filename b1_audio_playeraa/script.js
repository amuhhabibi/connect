function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function tambah(text, bagian){
    var para = document.createElement("option");
    var node = document.createTextNode(text);;
    // para.classList.add('pilihan')
    para.appendChild(node);

    var element = document.getElementById(bagian);
    element.appendChild(para);
}

function loadPilihan(){
    readTextFile("./data.json", function(text){
        var data = JSON.parse(text);
        
        // console.log(Object.keys(data))
        // console.log(Object.values(data)[0])

        for (i in Object.keys(data)){
            tambah(Object.keys(data)[i], "buch")
        }

        for (i in Object.values(data)[i]){
            tambah(Object.values(data)[0][i], "audioNum")
        }
    });
}

function reloadPilihan(){
        var a = document.getElementById("audioNum").value;
        console.log(a)
        var audio = document.getElementById('audio');
        document.getElementById('audioSource').src = "./src/audio/KB/" + a + ".mp3";
    
        audio.load(); //call this to just preload the audio without playing
}
