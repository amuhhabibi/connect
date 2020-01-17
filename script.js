var i;
var title = [];
var txt = [];
var article = [];

function preload() {
  for (i = 1; i < 4; i++) {
    article.push(loadStrings("mabaca/article/article00" + i + ".txt"));
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
    document.getElementById("text" + (i + 1)).innerText = txt[i] + ". . .";
  }
  remove();
  console.log(article);
}

// function setup() {
//   txt = article.slice(1, 3);
//   txt = txt.filter(v => v != "");
//   txt = txt + " ";
//   txt = txt.split(" ").slice(0, 35);
//   txt = txt.join(" ");
//   txt = txt + " . . .";
//   title = article.slice(0, 1);
//   document.getElementById("text1").innerText = txt;
//   document.getElementById("title1").innerText = title;
//   remove();
// }
