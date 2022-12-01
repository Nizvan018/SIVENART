/** Componentes de la vista: */
const $btn_registrar = document.getElementById('btn_registrar');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $telefono = document.getElementById('telefono');
const $nombre = document.getElementById('nombre');
const $p_apellido = document.getElementById('p_apellido');
const $s_apellido = document.getElementById('s_apellido');
const $localidad = document.getElementById('localidad');
const $entidad = document.getElementById('entidad');
const $calle = document.getElementById('calle');
const $numero = document.getElementById('numero');
const $colonia = document.getElementById('colonia');
const $codigo_postal = document.getElementById('codigo_postal');
/** Regex: */
const telefono_regex = /^[0-9]{3} [0-9]{3} [0-9]{4}/;
const cp_regex = /^[0-9]{5}/;

/** Función para validar la información del formulario: */
$btn_registrar.addEventListener('click', () => {
    if(telefono_regex.test($telefono.value) &&
    $nombre.value.trim().length > 0 &&
    $p_apellido.value.trim().length > 0 &&
    $s_apellido.value.trim().length > 0 &&
    $localidad.value.trim().length > 0 &&
    $entidad.value.trim().length > 0 &&
    $calle.value.trim().length > 0 &&
    $numero.value.trim().length > 0 &&
    $colonia.value.trim().length > 0 &&
    cp_regex.test($codigo_postal.value)){
        $form[0].submit();
    } else{
        window.alert('Introduzca correctamente todos los datos');
    }
});