let btnRecheche;
btnRecheche = document.getElementById('RechercheButton');

function changeButton() {
    btnRecheche.style.background = '#001A34';
}

btnRecheche.onclick = function() {changeButton()}
btnRecheche.style.background = '#003468';