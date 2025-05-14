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