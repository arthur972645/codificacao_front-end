let count = 0
const value = document.getElementById('value')
const btns = document.querySelectorAll('.btn')

btns.forEach(function(btn){

    btn.addEventListener('click', function(){
        //adiciona o evento (click) e o comportamento
        const style = event.currentTarget.classList
        if(style.contains('decrease')){
            count--;
        }
        else if(style.contains('reset')){
            count = 0;
        }
        else if(style.contains('increase')){
            count++;
        }
        value.textContent = count

        //mudar a cor do número quando positivo,  negativo e 0
        if(count >= 1){
            value.style.color = 'hsl(125, 67%, 44%)'
        }
        if(count == 0 ){
            value.style.color = 'hsl(209, 61%, 16%)'
        }
        if(count < 0){
            value.style.color = 'hsl(360, 67%, 44%)'
        }
        if(count > 5 ){
            value.className = 'gradiente'
        }else{
            value.className =''
        }
        
        
    })

    
})