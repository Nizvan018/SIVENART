let nav_aux = document.getElementById('nav_aux');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
const $shopping_cart_badget = document.getElementById("badged"); 

/** Función para mostrar y ocultar la navbar auxliar */
option3.addEventListener('click', () => {
    nav_aux.classList.toggle('d-flex');
    nav_aux.classList.toggle('d-none');
});

/** Función para ocultar el carrito y el usuario en la vista de signin */
function register_client(){
    if(window.location.pathname.includes('signin')){
        option1.hidden = true;
        option2.hidden = true;
    }
}

function revisar_carrito(){
    const cookieValue = document.cookie
    .split('; ')
    .find((row) => row.startsWith('car='))
    ?.split('=')[1];

    if(cookieValue){
        let json_cart = JSON.parse(cookieValue);
        let cont = 0;
        for (var i in json_cart) {
            cont += json_cart[i].quantity;
        }
        $shopping_cart_badget.setAttribute("value", cont);
    }else{
        $shopping_cart_badget.setAttribute("value", 0);
    }
}

register_client();
revisar_carrito();