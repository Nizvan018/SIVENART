let nav_aux = document.getElementById('nav_aux');
let option3 = document.getElementById('option3');

/** Función para mostrar y ocultar la navbar auxliar */
option3.addEventListener('click', () => {
    nav_aux.classList.toggle('d-flex');
    nav_aux.classList.toggle('d-none');
});