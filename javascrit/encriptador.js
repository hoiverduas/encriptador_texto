let isEncrypted = false; // Bandera para verificar si el texto ya está encriptado

function encritador() {
    // Verificar si el texto ya está encriptado
    if (isEncrypted) {
        swal("Ooops!", "El texto ya está encriptado", "warning");
        return;
    }

    // Obtener el valor del texto ingresado
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let contenedorEncriptado = document.querySelector('.encriptado');
    let mensajeEncriptado = document.querySelector('.mensaje-encriptado');
    let botonCopiar = document.querySelector('.btn-copiar');
    

    // Diccionario de cifrado
    const cifrado = {
        'a': 'ai', 'b': 'bat', 'c': 'cat', 'd': 'dot', 'e': 'enter',
        'f': 'fat', 'g': 'got', 'h': 'hat', 'i': 'imes', 'j': 'jot',
        'k': 'kit', 'l': 'lat', 'm': 'mat', 'n': 'net', 'o': 'ober',
        'p': 'pat', 'q': 'qat', 'r': 'rat', 's': 'sat', 't': 'tat',
        'u': 'ufat', 'v': 'vat', 'w': 'wat', 'x': 'xat', 'y': 'yat',
        'z': 'zat'
    };

    // Reemplazar cada letra del texto con su correspondiente valor cifrado
    let textoCifrado = texto.replace(/[a-z]/gi, function(match) {
        let isUpperCase = match === match.toUpperCase();
        let char = cifrado[match.toLowerCase()] || match;
        return isUpperCase ? char.toUpperCase() : char;
    });

    // Mostrar el texto cifrado y actualizar la interfaz según corresponda
    if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "../imag/encriptado.png";
        contenedorEncriptado.classList.add('encriptado-color');
        contenedorEncriptado.classList.remove('desencriptado-color');
        mensajeEncriptado.classList.add('encriptado-color');
        mensajeEncriptado.classList.remove('desencriptado-color', 'neutro');
        botonCopiar.classList.add('estado-desencriptado');
        botonCopiar.classList.remove('estado-encriptado');
        isEncrypted = true; // Marcar el texto como encriptado
    } else {
        document.getElementById("muñeco").src = "../imag/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar algún texto", "warning");
    }
}

function desencriptar() {
    // Verificar si el texto no está encriptado
    if (!isEncrypted) {
        swal("Ooops!", "El texto no está encriptado", "warning");
        return;
    }

    // Obtener el valor del texto ingresado
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");
    let contenedorEncriptado = document.querySelector('.encriptado');
    let mensajeEncriptado = document.querySelector('.mensaje-encriptado');
    let botonCopiar = document.querySelector('.btn-copiar');

    // Diccionario de descifrado
    const descifrado = {
        'ai': 'a', 'bat': 'b', 'cat': 'c', 'dot': 'd', 'enter': 'e',
        'fat': 'f', 'got': 'g', 'hat': 'h', 'imes': 'i', 'jot': 'j',
        'kit': 'k', 'lat': 'l', 'mat': 'm', 'net': 'n', 'ober': 'o',
        'pat': 'p', 'qat': 'q', 'rat': 'r', 'sat': 's', 'tat': 't',
        'ufat': 'u', 'vat': 'v', 'wat': 'w', 'xat': 'x', 'yat': 'y',
        'zat': 'z'
    };

    // Ordenar claves del diccionario por longitud descendente para evitar conflictos
    const clavesOrdenadas = Object.keys(descifrado).sort((a, b) => b.length - a.length);

    // Reemplazar cada secuencia cifrada con su correspondiente valor descifrado
    let textoDescifrado = texto;
    for (let clave of clavesOrdenadas) {
        let regex = new RegExp(clave, "gi");
        textoDescifrado = textoDescifrado.replace(regex, function(match) {
            let isUpperCase = match === match.toUpperCase();
            let char = descifrado[clave];
            return isUpperCase ? char.toUpperCase() : char;
        });
    }

    // Mostrar el texto descifrado y actualizar la interfaz según corresponda
    if (texto.length != 0) {
        document.getElementById("texto").value = textoDescifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "../imag/desencriptado.png"; 
        contenedorEncriptado.classList.add('desencriptado-color');
        contenedorEncriptado.classList.remove('encriptado-color');
        mensajeEncriptado.classList.add('desencriptado-color');
        mensajeEncriptado.classList.remove('encriptado-color', 'neutro');
        botonCopiar.classList.add('estado-desencriptado');
        botonCopiar.classList.remove('estado-encriptado');
        isEncrypted = false; // Marcar el texto como desencriptado
    } else {
        muñeco.src = "../imag/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!", "Debes ingresar algún texto", "warning");
    }
}

function copiarTexto() {
    let texto = document.getElementById("texto").value;

    if (texto.length != 0) {
        navigator.clipboard.writeText(texto).then(function() {
            swal("Éxito", "Texto copiado al portapapeles", "success");
        }, function(err) {
            swal("Error", "No se pudo copiar el texto", "error");
        });
    } else {
        swal("Ooops!", "No hay texto para copiar", "warning");
    }
}
