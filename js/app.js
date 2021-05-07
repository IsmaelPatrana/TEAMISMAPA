document.addEventListener("mousemove", parallax);

function parallax(e) {
    document.querySelectorAll(".object").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
}


window.addEventListener('scroll', tamarindo);

function tamarindo() {
    
    var card = document.querySelectorAll('.card-p') ;
    var contacto = document.getElementById('contacto-1');
    var header = document.getElementById('header-a');
    var distancia_2 = contacto.getBoundingClientRect().top;
    var altura_2 = window.innerHeight/4;

    for (var i = 0; i < card.length; i++){
        var altura = window.innerHeight/1.3;
        var distancia = card[i].getBoundingClientRect().top
        
        if(distancia <= altura) {
            card[i].classList.add('card')
        } else {
            card[i].classList.remove('card')
        }
    }

    /*header */

    if (distancia_2 < altura_2) {
        header.classList.add('header_fixed-2')
        console.log('Hola')
    } else {
        header.classList.remove('header_fixed-2')
    }


    

   
}

