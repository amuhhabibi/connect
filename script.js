var i;
var title = [];
var txt = [];
var article = [];

function preload() {
    for (i = 1; i < 4; i++) {
        v = i.toString().padStart(3, "0");
        article.push(loadStrings("mabaca/article/article" + v + ".txt"));
    }
}

function setup() {
    for (i = 0; i < 3; i++) {
        article[i] = article[i].filter(v => v != "");
        title[i] = article[i].slice(0, 1);
        txt[i] = article[i].slice(1, article.length - 1);
        txt[i] = txt[i] + " ";
        txt[i] = txt[i].split(" ").slice(0, 35);
        txt[i] = txt[i].join(" ");
        document.getElementById("title" + (i + 1)).innerText = title[i];
        document.getElementById("text" + (i + 1)).innerText = txt[i] + " . . . ";
    }
    remove();
}