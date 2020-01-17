function getText() {
  result = loadStrings("mabaca/article.txt");
  document.getElementById("text1").innerText = data;
}

getText();
// $.get(
//   "article001.txt",
//   function(data) {
//   },
//   "text"
// );

// $.getJSON("mabaca.json", function(json) {
//     document.getElementById("title3").innerText = json.title
//     document.getElementById("text3").innerText = json.shortened_text
// });
