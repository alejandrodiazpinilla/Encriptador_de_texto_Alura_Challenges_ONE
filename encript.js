// alert('hola');

function encriptarMensaje() {
    var texto= String(document.getElementById('textoE').value);      
    if (!texto == '') {        
        document.getElementById('img_des').style.display= 'none'; 
        document.getElementById('texto').style.display= 'none'; 
        document.getElementById('text_descrip').style.display = "block"; 
        document.getElementById('copiar').style.display = "block";   
        var salida = '';
        
        for (let i = 0; i < texto.length; i++) {
            if (texto[i] == 'a') {
                salida += texto[i].replace('a','ai') 
            }else if (texto[i] == 'e') {
                salida += texto[i].replace('e','enter') 
            }else if (texto[i] == 'i') {
                salida += texto[i].replace('i','imes') 
            }else if (texto[i] == 'o') {
                salida += texto[i].replace('o','ober') 
            }else if (texto[i] == 'u') {
                salida += texto[i].replace('u','ufat') 
            }else{
                salida += texto[i]
            }  
        }
        document.getElementById('text_descrip').innerHTML = salida;        
    }else{
        document.getElementById('warning').style.color= 'red';
        document.getElementById('admiracion').src='image/avertissement_red.png'; 
        document.getElementById('img_des').style.display= 'block'; 
        document.getElementById('texto').style.display= 'block'; 
        document.getElementById('text_descrip').style.display = "none"; 
        document.getElementById('copiar').style.display = "none"; 
    }
}