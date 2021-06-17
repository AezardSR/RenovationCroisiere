let btnRecheche;
btnRecheche = document.getElementById('RechercheButton');

function changeButton() {
    btnRecheche.style.background = '#001A34';
}
function resetColor(){
    btnRecheche.style.background = '#003468';
}

btnRecheche.onmouseover = function() {changeButton()}
btnRecheche.onmouseout = function() {resetColor()}



let formSubmit;

formSubmit = document.getElementById('form-submit');

formSubmit.onclick = function() {
    alert('Votre message a bien été envoyé ;)');
}



let slide1;
let slide2;
let slide3;
let slide4;

slide1 = document.getElementById('btnSlide-1').classList;
slide2 = document.getElementById('btnSlide-2').classList;
slide3 = document.getElementById('btnSlide-3').classList;
slide4 = document.getElementById('btnSlide-4').classList;


function test(){
    if (slide1 == 'active'){
        document.getElementById('h1').style.color = '#FFFFFF';
    }
    if (slide2 == 'active'){
        document.getElementById('h1').style.color = '#095aaa';
    }
    if (slide3 == 'active'){
        document.getElementById('h1').style.color = '#B20000';
    }
    if (slide4 == 'active'){
        document.getElementById('h1').style.color = '#FFAF40';
    }
}

var timer = setInterval("test()", 250);