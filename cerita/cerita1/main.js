async function readJSON(){
    const jsonFile = await fetch("data.json");
    const myData = await jsonFile.json();

    document.getElementById("judul").innerHTML = myData.judul;
    document.getElementById("isi").innerHTML = myData.isi;

};
readJSON();
