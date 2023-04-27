/** Componentes del documento: */
const $btn_register = document.getElementById('btn_register');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $nombre = document.getElementById('nombre');
const $decripcion = document.getElementById('descripcion');
const $avatar = document.getElementById('avatar');
const $localidad = document.getElementById('localidad');
const $entidad = document.getElementById('entidad');
const $calle = document.getElementById('calle');
const $numero = document.getElementById('numero');
const $colonia = document.getElementById('colonia');
const $codigo_postal = document.getElementById('codigo_postal');
const $artesano = document.getElementById('idArtesano');
const $span = Array.from(document.getElementsByClassName('obligatorio'));
/** Regex: */
const cp_regex = /^[0-9]{5}/;

/** Función para validar los campos del formulario: */
$btn_register.addEventListener('click', () => {
    if($nombre.value.trim().length > 0 &&
    $avatar.files.length > 0 &&
    $localidad.value.trim().length > 0 &&
    $entidad.value.trim().length > 0 &&
    $calle.value.trim().length >  0 &&
    $numero.value.trim().length > 0 &&
    $colonia.value.trim().length > 0 &&
    cp_regex.test($codigo_postal.value) &&
    $artesano.value.trim().length > 0){
        $form[0].submit();
    } else{
        $span.map((x) => {
            x.style.display = 'inline'
        });
        window.alert('Introduzca correctamente todos los datos');
    }
});