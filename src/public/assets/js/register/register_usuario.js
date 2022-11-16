const btn_administrador = document.getElementById('btn_administrador');
const btn_artesano = document.getElementById('btn_artesano');
const seccion_administrador = document.getElementById('seccion_administrador');
const seccion_artesano = document.getElementById('seccion_artesano');

seccion_artesano.hidden = true;

btn_administrador.addEventListener('click', () => {
    // Modifica estilos de administrador:
    btn_administrador.classList.remove('bg-medium-blue');
    btn_administrador.classList.remove('color-darker-blue');
    btn_administrador.classList.add('bg-main-blue');
    // Modifica estilos de artesanos:
    btn_artesano.classList.add('color-darker-blue');
    btn_artesano.classList.add('bg-medium-blue');
    btn_artesano.classList.remove('bg-main-blue');
    //Habilita administrador:
    seccion_administrador.hidden = false;
    seccion_artesano.hidden = true;
});

btn_artesano.addEventListener('click', () => {
    // Modifica estilos de administrador:
    btn_artesano.classList.remove('bg-medium-blue');
    btn_artesano.classList.remove('color-darker-blue');
    btn_artesano.classList.add('bg-main-blue');
    // Modifica estilos de artesanos:
    btn_administrador.classList.add('color-darker-blue');
    btn_administrador.classList.add('bg-medium-blue');
    btn_administrador.classList.remove('bg-main-blue');
    // Habilita artesano:
    seccion_administrador.hidden = true;
    seccion_artesano.hidden = false;
});