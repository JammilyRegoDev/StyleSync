function mostrarsenha(){
    var inputPass = document.getElementById('senha')
    var btnShowpass = document.getElementById('btn-senha')
    
    if(inputPass.type === 'password'){
        inputPass.setAttribute('type','text')
        btnShowpass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }
    
    else if(inputPass.type === 'text'){
        inputPass.setAttribute('type','password')
        btnShowpass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }
}

function ApenasLetras(e, t) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        } else if (e) {
            var charCode = e.which;
        } else {
            return true;
        }
        if (
            (charCode > 64 && charCode < 91) || 
            (charCode > 96 && charCode < 123) ||
            (charCode > 191 && charCode <= 255) // letras com acentos
        ){
            return true;
        } else {
            return false;
        }
    } catch (err) {
        alert(err.Description);
    }
}