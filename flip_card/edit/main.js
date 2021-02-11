var wortsätze = new Object();
var error = new Object();
$.getJSON('../wortsätze.json').done(function (data) {
    wortsätze = data;
    // console.log(data);
}).error(function (err) {
    error = err;
});

function inputWortsätze(a,b,c) {
    var baris = document.createElement("LI");
    var english = document.createElement("INPUT");
    var deutsch = document.createElement("INPUT");
    var newLine = document.createElement("BR");
    var desc = document.createElement("INPUT");
    var hapus = document.createElement("BUTTON");
    english.value = a;
    deutsch.value = b;
    desc.value = c;
    hapus.innerHTML = "X";
    hapus.onclick = function (){baris.remove()};
    baris.appendChild(english);
    baris.appendChild(deutsch);
    baris.appendChild(hapus);
    baris.appendChild(newLine);
    baris.appendChild(desc);
    english.style.width = "30ch";
    deutsch.style.width = "30ch";
    desc.style.width = "100ch";
    document.getElementById("parent").prepend(baris);
};

function loadJSON(){
    document.getElementById("loadButton").remove();
    for (i in wortsätze){
        var deutsch = wortsätze[i][0];
        var desc = wortsätze[i][1];
        inputWortsätze(i,deutsch,desc);
    }
};

function addNewIndex(){
    var englishInput = document.getElementById("englishInput");
    var deutschInput = document.getElementById("deutschInput");
    var descInput = document.getElementById("descInput");
    inputWortsätze(englishInput.value, deutschInput.value, descInput.value);

    englishInput.value = "";
    deutschInput.value = "";
    descInput.value = "";
    englishInput.focus();
};

// for (i in parent.children){
//     console.log(parent.children[i].children[0].value, parent.children[i].children[1].value, parent.children[i].children[3].value)
// }

function reloadBtn(){
    var hasil = document.getElementById("hasil");
    var parent = document.getElementById("parent");
    hasil.value = "";
    hasil.value += "{\n";
    for (i = 0; i < parent.children.length; i++){
        var a = parent.children[i].children[0].value;
        var b = parent.children[i].children[1].value;
        var c = parent.children[i].children[4].value;
        hasil.value += '"' + a + '" : ["'+ b + '", "' + c + '"],\n';
    };
    hasil.value = hasil.value.substring(0, hasil.value.length - 2);
    hasil.value += "\n}";
}

// '{\n "' + a + '" : ["' + b + '", "' + c + '"]\n'

// ',\n "' + a + '" : ["' + b + '", "' + c + '" ]'

// '}'

function saveBtn(){
    var textToSave = document.getElementById("hasil").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"application/json"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);

    var downloadLink = document.createElement("a");
    downloadLink.download = "wortsätze.json";
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);

    downloadLink.click();
}

function destroyClickedElement(event){
    document.body.removeChild(event.target);
}