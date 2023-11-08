const cadena = window.prompt("Introduce la cadena de texto: ");
    let div = document.getElementById("control");
    let datos = cadena.split(" ");
    let letra = (element) => element == 'F';
    let indiceF = datos.findIndex(letra);
    //Corta array desde la posicion que le das hasta el final que indicas (no incluye ese indice)
    let ArrayNombres = datos.slice(0,indiceF);
    let Camas = datos[indiceF + 1];
    let Saltos = datos[indiceF + 2];

    if (Camas == 0){
        let Variable = "Ningu te llit";
        div.innerHTML = Variable;
    } else if(Camas > ArrayNombres.length){
        let Variable = "Tots tenen llit";
        div.innerHTML = Variable;
    } else{
        let n = 0;
        while (ArrayNombres.length != Camas){
            for(i= 0;i < Saltos; i++){
                if (n == ArrayNombres.length){
                    n=0;
                }
                if(i == Saltos -1){
                    //Elimina el indice n (1 son los elementos que borra)
                    ArrayNombres.splice(n,1);
                }else{
                    n++;
                }
            }
        }
        let Variable = ArrayNombres.map((n,i) =>  (n)).join(' ');

        div.innerHTML = Variable;

    }