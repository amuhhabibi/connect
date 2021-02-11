const card = document.querySelector(".card__inner");
const card__face = document.querySelector(".card__face--front");
const card__face2 = document.querySelector(".card__face--front2");
const latar = document.getElementById("latar");

function check(){
    if (card.classList.contains('is-flipped')){
        latar.classList.add('no_latar');   
    }else{
        latar.classList.remove('no_latar');
    }
}

card.addEventListener("click", function (e) {
    card.classList.toggle('is-flipped');
    if (latar.classList.contains('no_latar')){
        setTimeout(function(){
            latar.classList.remove('no_latar');
        }, 800);    
    }else{
        latar.classList.add('no_latar');
    };
    setTimeout(function(){
        check();
    }, 800);
});

$(document).ready(function(){
    $("#latar").click(function(){
        var randNum = Math.floor(Math.random() * Object.keys(wortsätze).length);
        document.getElementById("english2").innerHTML = Object.keys(wortsätze)[randNum].toString();
        $(".card2").addClass("changeAni");
        $(".card__face2").addClass("changeShadow");
        latar.classList.add('no_latar');

    });

    $('.card2').on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
        $(this).removeClass("changeAni");
        var newWort = document.getElementById("english2").innerHTML;
        document.getElementById("english").innerHTML = newWort;
        document.getElementById("deutsch").innerHTML = wortsätze[newWort][0];
        document.getElementById("desc").innerHTML = wortsätze[newWort][1];
        card__face.classList.toggle("new__color");
        card__face2.classList.toggle("new__color");
        latar.classList.remove('no_latar');
    });
});


var wortsätze = new Object();
var error = new Object();
$.getJSON('../wortsätze.json').done(function (data) {
    wortsätze = data;
    // console.log(data);
}).error(function (err) {
    error = err;
});