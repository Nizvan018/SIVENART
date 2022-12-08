/** Componentes del documento: */
const $btn_register = document.getElementById('btn_edit');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $nombre = document.getElementById('nombre');
const $descripcion = document.getElementById('descripcion');
const $stock = document.getElementById('stock');
const $precio = document.getElementById('precio');
const $categoria = document.getElementById('categoria');

/** Función para validar los campos del formulario: */
$btn_register.addEventListener('click', () => {
    if($nombre.value.trim().length > 0 &&
    $stock.value.trim().length > 0 &&
    $precio.value.trim().length > 0 &&
    $categoria.value != 0){
        if($stock.value > 0 && $precio.value >= 5){
            $form[0].submit();
        } else{
            window.alert('Introduzca correctamente todos los datos');
        }
    } else{
        window.alert('Introduzca correctamente todos los datos');
    }
});