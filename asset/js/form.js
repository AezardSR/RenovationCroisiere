let formSubmit;

formSubmit = document.getElementById('form-submit');

function messageSubmit(){
    alert('Votre message a bien été envoyé ;)')
}

formSubmit.onclick = function() { messageSubmit() }