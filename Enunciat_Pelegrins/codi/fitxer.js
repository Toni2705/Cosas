const div = document.getElementById('control');
const insertar = document.getElementById('archivoInput');
const procesarBoton = document.getElementById('procesarArchivo');

insertar.addEventListener('change', function(e) {
    const archivo = e.target.files[0];

    if(archivo) {
        const lector = new FileReader();
        lector.readAsText(archivo);
        lector.onload = function(e) {
            let contenido = e.target.result;
            let array = contenido.split(" ");
            let separacion = sacarSeparacion(array);
            let nombres = array.slice(0, separacion);
            let camas = array[separacion+1];
            let palabras = array[separacion+2];
            
            if(nombres.length <= camas) {
                let variable = "TOTS TENEN LLIT";
                div.innerHTML = variable;
                div.style.color = 'green';  
            }
            else if(camas == 0){
                let variable = "NINGÚ TÉ LLIT";
                div.innerHTML = variable;
                div.style.color = 'red';  
            }
            else {
                nombres = ganadores(nombres, camas, palabras);
                let variable = nombres.map((n, i) => (n)).join(' ');
                div.innerHTML = variable;
            } 
        };
        
    }

}); 

//Devuelve el valor del indice con la letra F que es la separacion entre los nombrs y el numero de camas y palabras de la cancion
function sacarSeparacion(array) {
    let letra = (element) => element == 'F';
    let separacion = array.findIndex(letra);

    return separacion;
}

//Devuelve el array con los que tienen cama
function ganadores(nombres, camas, palabras) {
    let posicion = 0;
    while(nombres.length > camas) {
        for(i=0; i<palabras; i++) {
            if(i == palabras-1) {
                nombres.splice(posicion, 1);
            }
            else {
                posicion++;
            }
            if(posicion >= nombres.length) {
                posicion = 0;
            }
        }
    }

    return nombres;
}