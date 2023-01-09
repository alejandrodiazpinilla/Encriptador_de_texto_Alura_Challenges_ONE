var textoCopiar = ''

/* FUNCION PARA DESENCRIPTAR  */
function encriptarMensaje() {
    var texto = String(document.getElementById('textoE').value);
    if (!texto == '') {
        document.getElementById('img_des').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('text_descrip').style.display = "block";
        document.getElementById('copiar').style.display = "block";
        var salida = '';

        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == 'a') {
                salida += texto[i].replace('a', 'ai')
            } else if (texto[i] == 'e') {
                salida += texto[i].replace('e', 'enter')
            } else if (texto[i] == 'i') {
                salida += texto[i].replace('i', 'imes')
            } else if (texto[i] == 'o') {
                salida += texto[i].replace('o', 'ober')
            } else if (texto[i] == 'u') {
                salida += texto[i].replace('u', 'ufat')
            } else {
                salida += texto[i]
            }
        }
        textoCopiar =  document.getElementById('text_descrip').innerHTML = salida;
    } else {
        document.getElementById('warning').style.color = 'red';
        document.getElementById('admiracion').src = 'image/avertissement_red.png';
        document.getElementById('img_des').style.display = 'block';
        document.getElementById('texto').style.display = 'block';
        document.getElementById('text_descrip').style.display = "none";
        document.getElementById('text_descrip').value = " ";
        document.getElementById('copiar').style.display = "none";
    }
}

/* FUNCION PARA DESENCRIPTAR  */

function desencriptarMensaje() {
    var texto = String(document.getElementById('textoE').value);
    if (!texto == '') {
        document.getElementById('img_des').style.display = 'none';
        document.getElementById('texto').style.display = 'none';
        document.getElementById('copiar').style.display = "block";
        var salida = '';
        salida = texto.replaceAll('ai', 'a');
        var salida1 = salida.replaceAll('enter', 'e');
        var salida2 = salida1.replaceAll('imes', 'i');
        var salida3 = salida2.replaceAll('ober', 'o');
        var salida4 = salida3.replaceAll('ufat', 'u');
        textoCopiar = document.getElementById('text_descrip').innerHTML = salida4;
        document.getElementById('text_descrip').style.display = "block";

    } else {
        document.getElementById('warning').style.color = 'red';
        document.getElementById('admiracion').src = 'image/avertissement_red.png';
        document.getElementById('warning').style.color = 'red';
        document.getElementById('admiracion').src = 'image/avertissement_red.png';
        document.getElementById('img_des').style.display = 'block';
        document.getElementById('texto').style.display = 'block';
        document.getElementById('text_descrip').style.display = "none";
        document.getElementById('text_descrip').value = " ";
        document.getElementById('copiar').style.display = "none";
    }
}
/* FUNCION PARA COPIAR  */
function copiar() {
    navigator.clipboard.writeText(textoCopiar);
}