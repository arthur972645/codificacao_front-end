const inNome = document.getElementById('inNome')
const rbMasculino = document.getElementById('rbMasculino')
const rbFeminino = document.getElementById('rbFeminino')
const inAltura = document.getElementById('inAltura')
const outResposta = document.getElementById('outResposta')

const btnCalculando = document.getElementById('btnCalculando')
const btnLimpar = document.getElementById('btnLimpar')

btnCalculando.addEventListener('click',function(){
    let nome = inNome.value
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)

    console.log(nome, masculino, feminino, altura)
    
    if(nome === ''){
        alert('por favor, coloque seu nome')
        inNome.focus()
        return
    }

    if(altura <= 0 || isNaN(altura)){
        alert('Por favor , sua altura')
        inAltura.focus()
        return
    }

    let peso 
    if(masculino){
        peso = 22 * Math.pow(altura, 2)
    }else if(feminino){
        peso = 21 * Math.pow(altura, 2)
    }
    //Atribuir texto de 3 maneiras:
    //innerHTML
    //innerText
    //textContent (Usar ess)
    outResposta.textContent = `${nome}: Seu peso ideal é : ${peso.toFixed(2)}Kg`
})
btnLimpar .addEventListener('click', function(){
    location.reload();
})
