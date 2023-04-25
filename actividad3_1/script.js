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
    let div = document.querySelector('#ocultar-y-mostrar');//recibe el id del div
    div.style.visibility = 'visible';// le da el parametro de visible 
    let boton = document.querySelector('#ocultar-mostrar');// el boton recibe el id del boton 
    boton.addEventListener('click', function (e) {// se le agrega un evento al dar click 
        if (div.style.visibility === 'visible') {// si el evento esta en visible, entonces lo oculta 
            div.style.visibility = 'hidden';
        } else {
            div.style.visibility = 'visible';
        }
    }, false);
}