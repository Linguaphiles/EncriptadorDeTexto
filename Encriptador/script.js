// Variables
const inputTexto = document.getElementById('input-texto');
const outputTexto = document.getElementById('output-texto');
const mensajeVacio = document.getElementById('mensaje-vacio');
const btnCopiar = document.getElementById('btn-copiar');

// Función para encriptar el texto
function encriptarTexto() {
    let texto = inputTexto.value.toLowerCase(); // Convertir todo a minúsculas
    let textoEncriptado = texto.replace(/e/g, 'enter')
                               .replace(/i/g, 'imes')
                               .replace(/a/g, 'ai')
                               .replace(/o/g, 'ober')
                               .replace(/u/g, 'ufat');
    outputTexto.value = textoEncriptado;
    mostrarResultado();
}

// Función para desencriptar el texto
function desencriptarTexto() {
    let texto = inputTexto.value.toLowerCase();
    let textoDesencriptado = texto.replace(/enter/g, 'e')
                                  .replace(/imes/g, 'i')
                                  .replace(/ai/g, 'a')
                                  .replace(/ober/g, 'o')
                                  .replace(/ufat/g, 'u');
    outputTexto.value = textoDesencriptado;
    mostrarResultado();
}

// Función para mostrar el área de resultado
function mostrarResultado() {
    if (inputTexto.value.trim() !== "") {
        mensajeVacio.style.display = 'none';
        outputTexto.style.display = 'block';
        btnCopiar.style.display = 'block';
    } else {
        mensajeVacio.style.display = 'flex';
        outputTexto.style.display = 'none';
        btnCopiar.style.display = 'none';
    }
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    outputTexto.select();
    document.execCommand('copy');
}

// Asignar funciones a los botones
document.getElementById('btn-encriptar').onclick = encriptarTexto;
document.getElementById('btn-desencriptar').onclick = desencriptarTexto;
document.getElementById('btn-copiar').onclick = copiarTexto;

// Verificar si hay texto al cargar la página
inputTexto.addEventListener('input', mostrarResultado);