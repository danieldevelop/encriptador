const regexText = new RegExp(/^[a-zñ ]+$/gm);

export const esTexto = (texto) => (texto.match(regexText) ? true : false);

export const miniAlerta = (mensaje, icono, boton, position) => {
    const Toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: boton,
        showCancelButton: boton,
        timer: 3000,
    });

    Toast.fire({
        icon: icono,
        title: mensaje,
    });
}

export const esconderElemento = (elemento) => {
    document.querySelector(elemento).style.display = 'none';
};