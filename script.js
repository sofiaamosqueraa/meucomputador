const boton = document.getElementById('cambiarTexto');
const textoPrincipal = document.getElementById('textoPrincipal');
const textoEspecifico = document.getElementById('textoEspecifico');

let mostrandoTextoPrincipal = true;

boton.addEventListener('click', function() {
    if (mostrandoTextoPrincipal) {
        textoPrincipal.style.display = 'none';
        textoEspecifico.style.display = 'block';
    } else {
        textoPrincipal.style.display = 'block';
        textoEspecifico.style.display = 'none';
    }

    mostrandoTextoPrincipal = !mostrandoTextoPrincipal;
});
