/* 

// ELIMINAR CATEGORIA

function eliminarCategoria(identificador){
    console.log("ejecutando funcion para eliminar");

    let categoria = {
        id: +identificador
    };

    console.log(categoria);

    $.ajax({
        url: "http://localhost:8080/api/Category/deletecategoria",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });
} 


// ELIMINAR COMPUTADORES

function eliminarComputer(identificador){
    console.log("ejecutando funcion para eliminar");

    let computer = {
        id: +identificador
    };

    console.log(computer);

    $.ajax({
        url: "http://",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el computador');
            }
        },
    });
} 



// ELIMINAR CLIENTES


function eliminarClient(identificador){
    console.log("ejecutando funcion para eliminar");

    let client = {
        id: +identificador
    };

    console.log(client);

    $.ajax({
        url: "https://",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el cliente');
            }
        },
    });
}


// ELIMINAR MENSAJES


function eliminarMessage(identificador){
    console.log("ejecutando funcion para eliminar");

    let message = {
        id: +identificador
    };

    console.log(message);

    $.ajax({
        url: "https://",
        type: 'DELETE',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            204:function(){
                alert('Se ha eliminado el message');
            }
        },
    });
} */