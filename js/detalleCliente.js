/* $(document).ready(function () {
    console.log("document ready!");
    let searchParams = new URLSearchParams(window.location.search)
    if (searchParams.has('id')){
        let id = searchParams.get('id')
        consultarById(id);
    }
});

function consultarById(id){
    $.ajax({
<<<<<<< HEAD
        url: "http://localhost:8080/api/Client/"+id,
=======
        url: "https://"+id,
>>>>>>> d692407910e560de06ea6c36d1ec10e846fc5fc2
        type: 'GET',
        dataType: 'json',
        success: function(respuesta){

            var length= 0;
            for(var key in respuesta) {
                if(respuesta.hasOwnProperty(key)){
                    length++;
                }
            }

            if (length>0){
                console.log(respuesta)
                llenarDatos(respuesta);
            }else{
                $("#boton").hide();
                alert('No se encuentra el cliente con el id '+id);
            }
        },        
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        }
    });
}

function llenarDatos(item){
<<<<<<< HEAD
    +$("#id").val(item.idClient);
    $("#name").val(item.name);
    $("#email").val(item.email);
    +$("#age").val(item.age);
}
=======
    +$("#id").val(item.id);
    $("#name").val(item.name);
    $("#email").val(item.email);
    +$("#age").val(item.age);
} */
>>>>>>> d692407910e560de06ea6c36d1ec10e846fc5fc2
