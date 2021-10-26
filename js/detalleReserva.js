$(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
        url: "http://localhost:8080/api/Reservation/"+id,
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){
            console.log(respuesta);
            if (respuesta.items.length==1){
                llenarDatos(respuesta[0]);
            }else{
                $("#boton").hide();
                alert('No se encuentra la categoria con el id '+id);
            }
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
    +$("#id").val(item.id);
    $("#Catname").val(item.name);
    $("#Catdescription").val(item.description);
}