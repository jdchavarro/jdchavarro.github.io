//getTime() toma el tiempo actual en milisegundos
var inicio = new Date().getTime(); //Alcance global
function colorAleatorio() {
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i=0;i<6;i++){
        color += letras[Math.round(Math.random()*15)];
    }
    return color;
}
function aparecerForma(){
    var top = Math.random()*400;
    var left = Math.random()*400;
    var width = (Math.random()*200)+20;
    //50% de probabilidad de un circulo
    if((Math.random()) >= 0.5){
       document.getElementById("forma").style.borderRadius = "50%";
    }
    document.getElementById("forma").style.display = "block";
    document.getElementById("forma").style.top = top+"px";
    document.getElementById("forma").style.left = left+"px";
    document.getElementById("forma").style.width = width+"px";
    document.getElementById("forma").style.height = width+"px";
    document.getElementById("forma").style.backgroundColor = colorAleatorio();
    //Tomamos el tiempo en cuanto aparece el circulo
    inicio = new Date().getTime();
}
function aparecerFormaDespuesRetraso(){
    setTimeout(aparecerForma, Math.random()*2000);
}
document.getElementById("forma").onclick = function(){
    document.getElementById("forma").style.display = "none";
    var fin = new Date().getTime();
    var diferencia = (fin - inicio)/1000;
    document.getElementById("tiempoReaccion").innerHTML = diferencia + " segundos";
    aparecerFormaDespuesRetraso();
}