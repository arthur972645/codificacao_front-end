function verificarMulta() {
    const velocidade = document.querySelector('#velocidade').value
    const resultado = document.querySelector('#resultado ')
    if(velocidade <= 60){
        resultado.innerHTML = 'Vc não foi multado lindo'
    }else{
        resultado.innerHTML = 'Vc foi multado'
    }   
    
}