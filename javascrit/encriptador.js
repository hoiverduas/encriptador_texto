function encritador() {
    // Obtener el valor del texto ingresado
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

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
        muñeco.src = "../imag/encriptado.jpg";
    } else {
        document.getElementById("muñeco").src = "../imag/muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!","Debes ingresar algún texto","warning");
    }
}

function desencriptar() {
    // Obtener el valor del texto ingresado
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

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
        muñeco.src = "../imag/desencriptado.jpg"; 
    } else {
        muñeco.src = "../imag/muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        swal("Ooops!","Debes ingresar algún texto","warning");
    }
}
