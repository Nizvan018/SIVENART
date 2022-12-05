let nav_aux = document.getElementById('nav_aux');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');

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

register_client();