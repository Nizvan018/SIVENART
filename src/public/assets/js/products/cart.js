/** Componentes del documento: */
const $btn_register = document.getElementById('btn_register');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $numero_tarjeta = document.getElementById('numeroTarjeta');
const $cvv = document.getElementById('cvv');
const $nombre_tarjeta = document.getElementById('nombreTarjeta');
/** Regex: */
const numero_tarjeta_regex = /^[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;
const cvv_regex = /^[0-9]{3}/;

/** Función para validar los datos de la tarjeta: */
$btn_register.addEventListener('click', () => {
    if(numero_tarjeta_regex.test($numero_tarjeta.value) &&
    cvv_regex.test($cvv.value) &&
    $nombre_tarjeta.value.trim().length > 0){
        // $form[0].submit();
        console.log('si');
    } else{
        window.alert('Introduzca correctamente los datos solicitados');
    }
});

/** Función para calcular los años del input: */
function calcular_anio(){
    var select = document.getElementById('anoVencimiento');
        var anioActual = new Date().getFullYear();
        for (var i = anioActual; i <= anioActual + 15; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = i;
            select.appendChild(option);
        }
}

calcular_anio();