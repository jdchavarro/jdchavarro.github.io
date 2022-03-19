//permite actualizar el output
function actualizarSalida(){
    //modificamos el contenido de iframe
    //tomanos el valor que tiene el htmlPanel
    $("iframe").contents().find("html").html(
        "<html><head><style type='text/css'>"+
        $("#cssPanel").val()+
        "</style></head><body>"+
        $("#htmlPanel").val())+
        "</body></html>";
    //eval permite ejecutar cadenas de texto como javascript
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
};
//Permite cambiar el color de gris al pasar sobre un boton
$(".boton").hover(
    //aunque las 2 siguientes lineas funcionan bien para poner y quitar el color
    //no es lo ideal
    /*
    function(){$(this).css("backgroundColor","#E5E5E5");},
    function(){$(this).css("backgroundColor","#EEEEEE");}
    */
    function(){$(this).addClass("botonMarcado");},
    function(){$(this).removeClass("botonMarcado");}
);
//permite crear el azul celeste al presionar un boton
$(".boton").click(function(){
    //toggleClass permite alternar clases
    //si la tiene la quita y si no la tiene la pone
    $(this).toggleClass("activo");
    $(this).removeClass("botonMarcado");
    //concatenamos el id del boton con la palabra panel
    //que resulta en el id del textarea
    var panelId = $(this).attr("id")+"Panel";
    //aqui lo que hacemos es intercalar la clase oculto con el id
    $("#"+panelId).toggleClass("oculto");
    //con length se saca l numero de elementos que tienen la clase oculto puesta
    var numeroDePanelesActivos = 4-$(".oculto").length;
    //modificamos el ancho de los paneles conforme el numero de paneles activos
    $(".panel").width(($(window).width()/numeroDePanelesActivos)-10);
});
//damos la altura a los paneles de visualizacion 
//tomando la altura de la ventana y restando la de la barra
$(".panel").height($(window).height()-$("#barra").height());
//modificamos el ancho de los paneles de visualizacion
$(".panel").width(($(window).width()/2)-10);
actualizarSalida();
//cuando el textarea cambie se teclee o se pegue algo ejecute un codigo
$("textarea").on("change keyup paste", function(){
    actualizarSalida();
});