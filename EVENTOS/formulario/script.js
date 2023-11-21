function validaFormulario(){
    const nome  = document.getElementById("nome").value
    const email  = document.querySelector("#email").value
    const senha  = document.getElementById("senha").value

    //Validação dos campos preenchidos
    if(nome == '' || email == '' || senha == ''){
        alert("Digite os corretamente os campos")
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(!emailRegex.test(email)){
        alert("Por favor, insira um email valido")
    }

    //validação da senha =
    else if(senha.length > 8 ){
        alert("Limite de caracter exedido")
    }else{
        alert("Cadastro realizado com sucesso")
    }


}