function validateEmail(){
    // Obtencion del valor del campo del email
    const email = document.getElementById('email').value;
    // expresion regular para verificar si el correo electronico es valido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // validacion del email
    if (emailRegex.test(email)) {
        // El correo electrónico es válido
        alert('El correo electronico es valido');
      } else {
        alert('Por favor ingrese un correo electrónico válido');
      }
}


window.addEventListener('load', init, false);
function init() {
    let div = document.querySelector('#ocultar-y-mostrar');
    div.style.visibility = 'visible';
    let boton = document.querySelector('#ocultar-mostrar');
    boton.addEventListener('click', function (e) {
        if (div.style.visibility === 'visible') {
            div.style.visibility = 'hidden';
        } else {
            div.style.visibility = 'visible';
        }
    }, false);
}
