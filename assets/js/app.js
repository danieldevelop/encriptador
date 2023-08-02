import { miniAlerta, esTexto, esconderElemento } from "./utils.js";
import { encripta, desencripta, copiarTexto } from "./funciones.js";

const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoProcesado = document.getElementById('texto-procesado');
const btnCopiarTexto = document.getElementById('btn-copiar-texto');

btnEncriptar.addEventListener('click', () => {
    const inpTexto = document.getElementById('texto').value.trim();

    if (inpTexto === '') {
        miniAlerta('Debes ingresar un texto', 'warning', false, 'top');
        return;
    } else if (!esTexto(inpTexto)) {
        miniAlerta('Debes ingresar solo letras minusculas y sin acentos', 'error', false, 'top');
        return;
    }

    // Modificamos los estilos de los elementos
    esconderElemento('.img-munheco');
    esconderElemento('.informacion__info');
    esconderElemento('.informacion__leyenda');
    textoProcesado.style.display = 'block';
    textoProcesado.style.height = '100%';
    // Mostramos el texto procesado en el txtarea encriptado
    textoProcesado.value = encripta(inpTexto);
    // Mostramos el boton de copiar texto
    btnCopiarTexto.style.display = 'block';

});


btnDesencriptar.addEventListener('click', () => {
    const inpTexto = document.getElementById('texto').value.trim();

    if (inpTexto === '') {
        miniAlerta('Debes ingresar un texto', 'warning', false, 'top');
        return;
    } else if (!esTexto(inpTexto)) {
        miniAlerta('Debes ingresar solo letras minuscula y sin acentos', 'error', false, 'top');
        return;
    }

    esconderElemento('.img-munheco');
    esconderElemento('.informacion__info');
    esconderElemento('.informacion__leyenda');
    textoProcesado.style.display = 'block';
    textoProcesado.style.height = '100%';
    textoProcesado.value = desencripta(inpTexto);
    btnCopiarTexto.style.display = 'block';
});


btnCopiarTexto.addEventListener('click', () => {
    copiarTexto(textoProcesado);
});