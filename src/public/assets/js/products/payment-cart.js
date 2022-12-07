/** Componentes del documento: */
const $btn_register = document.getElementById('btn_register');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $numero_tarjeta = document.getElementById('numeroTarjeta');
const $cvv = document.getElementById('cvv');
const $nombre_tarjeta = document.getElementById('nombre_tarjeta');
/** Regex: */
const numero_tarjeta_regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
const cvv_regex = /^[0-9]{3}/;

$btn_register.addEventListener('click', () => {
    if(numero_tarjeta_regex.test($numero_tarjeta.value) &&
    cvv_regex.test($cvv.value) &&
    $nombre_tarjeta.value.trim().length > 0){
        // $form[0].submit();
        console.log('no');
    } else{
        window.alert('Introduzca correctamente los datos solicitados');
    }
});