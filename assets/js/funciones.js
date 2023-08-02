import { miniAlerta } from './utils.js';

export const encripta = (texto) => {
    let textoCifrado = '';

    // Si no se hace en este orden, se pueden generar errores
    textoCifrado = texto.replaceAll(/e/gm, "enter")
        .replaceAll(/i/gm, "imes")
        .replaceAll(/a/gm, "ai")
        .replaceAll(/o/gm, "ober")
        .replaceAll(/u/gm, "ufat");

    return textoCifrado;
};

export const desencripta = (texto) =>  {
    let textoDecifrado = '';

    // Si no se hace en este orden, se pueden generar errores
    textoDecifrado = texto.replaceAll(/enter/gm, "e")
        .replaceAll(/imes/gm, "i")
        .replaceAll(/ai/gm, "a")
        .replaceAll(/ober/gm, "o")
        .replaceAll(/ufat/gm, "u");

    return textoDecifrado;
};

export const copiarTexto = (texto) => {
    texto.select();

    if (document.execCommand('copy')) {
        miniAlerta('Texto copiado al portapapeles', 'success', false, 'top');
    } else {
        miniAlerta('No se pudo copiar el texto', 'error', false, 'top');
    }
}