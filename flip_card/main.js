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

const wortsätze = {
    "To meet" : ["Sich treffen", "Mein Bruder und sein Sohn <strong>treffen sich</strong> morgen um neun Uhr in einem Restaurant."],
    "To look forward": ["Sich freuen + auf", "Ich <strong>freue mich auf</strong> Ihre Party Herr Budi"],
    "Phone" : ["Das Handy", "Dieses <strong>neue Handy</strong>, das ich gekauft habe, ist für meine Schwester"],
    "Car" : ["Das Auto", "Das <strong>rote Auto</strong>, das vor Ihrem Haus geparkt ist, gehört meinem Onkel."],
    "Analysis" : ["Die Analyse, -n",""],
    "To work on, process, edit" : ["Bearbeiten,",""],
    "Postal carrier (f.)" : ["Die Briefträgerin, -nen",""],
    "Chemist (f.)" : ["die Chemikerin, -nen",""],
    "Electronics" : ["Die Elektronik",""],
    "Knowledge of foreign languages" : ["Die Fremdsprachenkenntnis, -se",""],
    "Controlled" : ["Geregelt",""],
    "Laboratorium" : ["Das Labor, -s",""],
    "Mechanical electronics engineer (f.)" : ["Die Mechatronikerin, -nen",""],
    "Metal" : ["Das Metall, -e",""],
    "To take s.o. or s.t. seriously" : ["Ernst nehmen",""],
    "Challenge" : ["Die Herausforderung, -en",""],
    "To regulate, control" : ["Regeln",""],
    "Scientist (f.)" : ["Die Wissenschaftlerin, -nen",""],
    "File, record" : ["Die Akte, -n",""],
    "Farmer (m.)" : ["Der Bauer, -n",""],
    "Company, corporation, society" : ["Die Gesellschaft ",""],
    "Dealer, trader (m.)" : ["Der Händler, -",""],
    "Artisan (m.)" : ["Der Handwerker, -",""],
    "People skills" : ["Die Menschenkenntnis (Singular)",""],
    "Politician (m.)" : ["Der Politiker, -",""],
    "Reporter (m.)" : ["Der Reporter, -",""],
    "Judge (m.)" : ["Der Richter, -",""],
    "Carpenter (f.)" : ["Die Schreinerin, -nen",""]
};