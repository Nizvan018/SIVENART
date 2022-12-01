/** Componentes del documento: */
const $btn_administrador = document.getElementById('btn_administrador');
const $btn_artesano = document.getElementById('btn_artesano');
const $btn_registrar = document.getElementById('btn_registrar');
const $seccion_administrador = document.getElementById('seccion_administrador');
const $seccion_artesano = document.getElementById('seccion_artesano');
const $tipo_user =document.getElementById("tipo");
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $email = document.getElementById('email');
const $contra = document.getElementById('contra');
const $telefono = document.getElementById('telefono');
const $nombre = document.getElementById('nombre');
const $p_apellido = document.getElementById('p_apellido');
const $s_apellido = document.getElementById('s_apellido');
const $puesto = document.getElementById('puesto');
const $avatar = document.getElementById('avatar');
/** Regex: */
const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const telefono_regex = /^[0-9]{3} [0-9]{3} [0-9]{4}/;

seccion_artesano.hidden = true;

/** Función para ver la sección de administradores: */
$btn_administrador.addEventListener('click', () => {
    // Modifica estilos de administrador:
    $btn_administrador.classList.remove('bg-medium-blue');
    $btn_administrador.classList.remove('color-darker-blue');
    $btn_administrador.classList.add('bg-main-blue');
    // Modifica estilos de artesanos:
    $btn_artesano.classList.add('color-darker-blue');
    $btn_artesano.classList.add('bg-medium-blue');
    $btn_artesano.classList.remove('bg-main-blue');
    //Habilita administrador:
    $seccion_administrador.hidden = false;
    $seccion_artesano.hidden = true;
    $tipo_user.setAttribute("value","administrador");
});

/** Función para ver la sección de artesanos: */
$btn_artesano.addEventListener('click', () => {
    // Modifica estilos de administrador:
    $btn_artesano.classList.remove('bg-medium-blue');
    $btn_artesano.classList.remove('color-darker-blue');
    $btn_artesano.classList.add('bg-main-blue');
    // Modifica estilos de artesanos:
    $btn_administrador.classList.add('color-darker-blue');
    $btn_administrador.classList.add('bg-medium-blue');
    $btn_administrador.classList.remove('bg-main-blue');
    // Habilita artesano:
    $seccion_administrador.hidden = true;
    $seccion_artesano.hidden = false;
    $tipo_user.setAttribute("value","artesano");
});

/** Función para validar los campos del formulario: */
$btn_registrar.addEventListener('click', () => {
    let valido = 0;

    // Validación de campos generales:
    if(email_regex.test($email.value) && 
    $contra.value.trim().length >= 8 && 
    telefono_regex.test($telefono.value) &&
    $nombre.value.trim().length > 0 &&
    $p_apellido.value.trim().length > 0 &&
    $s_apellido.value.trim().length > 0){
        valido++;   
    }

    // Validación para administrador o artesano:
    if($tipo_user.value == 'administrador'){ //administrador:
        if($avatar.files.length > 0){
            valido++;
        }
    } else{ //artesano:
        if($avatar.files.length > 0 && $puesto.value.trim().length > 0){
            valido++;
        }
    }

    // Envio del formulario:
    if(valido == 2){
        $form[0].submit();
    } else{
        window.alert('Introduzca correctamente todos los datos');
    }
});