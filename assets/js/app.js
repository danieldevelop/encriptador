import { 
    miniAlerta, 
    esTexto } 
from "./utils.js";

const btnEncriptar = document.getElementById('btn-encriptar');
const brnDesencriptar = document.getElementById('btn-desencriptar');

btnEncriptar.addEventListener('click', () => {
    const inpTexto = document.getElementById('texto').value.trim();

    if (inpTexto === '') {
        miniAlerta('Debes ingresar un texto', 'warning', false, 'top');
        return;
    } else if (!esTexto(inpTexto)) {
        miniAlerta('Debes ingresar solo letras minusculas', 'error', false, 'top');
        return;
    }
});

