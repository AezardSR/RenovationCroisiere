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
