/** Componentes de la vista: */
const $btn_register = document.getElementById('btn_register');
/** Componentes del formulario: */
const $form = document.getElementsByTagName('form');
const $email = document.getElementById('email');
const $contra = document.getElementById('contra');
/** Regex: */
const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

/** Función para validar la información del formulario */
$btn_register.addEventListener('click', () => {
    if(email_regex.test($email.value) && $contra.value.trim().length >= 8){
        $form[0].submit();
    } else{
        window.alert('Por favor, introduzca correctamente los datos');
    }
});