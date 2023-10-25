const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", " Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
function fechaActual(){

    var fechaActual = new Date();


    var mesPalabra = meses[fechaActual.getMonth()];
    var anio = ""+fechaActual.getFullYear();
    var dia = ""+fechaActual.getDate();
    var fechaCompleta = []
     fechaCompleta.push(dia);
     fechaCompleta.push(anio);
     fechaCompleta.push(mesPalabra);
    
    document.getElementById("dia").innerHTML = fechaCompleta[fechaCompleta.indexOf(dia)];
    document.getElementById("mes").innerHTML = fechaCompleta[fechaCompleta.indexOf(mesPalabra)]
    document.getElementById("anio").innerHTML = fechaCompleta[fechaCompleta.indexOf(anio)];
}

fechaActual();