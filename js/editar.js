console.log("editar: ¡funciona!");

//=======================================
// EDITAR CATEGORIA
//=======================================


function editarCategoria(){
    console.log("ejecutando funcion para actualizar");

    let categoria = {
        id: +$("#Catid").val(),
        name: $("#Catname").val(),
        description: $("#Catdescription").val(),
    };

    console.log(categoria);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Category/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la categoria');
            }
        },
    });
}
//=======================================
// EDITAR COMPUTER
//=======================================


function editarComputer(){
    console.log("ejecutando funcion para actualizar");

    let computer = {
        id: +$("#id").val(),
        name: $("#Cname").val(),
        brand: $("#brand").val(),
        year: +$("#year").val(),
        description: $("#description").val(),
    };

    console.log(computer);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Computer/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computer),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el computador');
            }
        },
    });
}

//=======================================
// EDITAR CLIENTE
//=======================================

function editarClient(){
    console.log("ejecutando funcion para actualizar");

    let client = {
        idClient: +$("#id").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        name: $("#Clname").val(),
        age: +$("#age").val(),
    };

    console.log(client);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Client/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el cliente');
            }
        },
    });
}


//=======================================
// EDITAR MESSAGE
//=======================================


function editarMessage(){
    console.log("ejecutando funcion para actualizar");

    let message = {
        id: +$("#id").val(),
        messagetext: $("#messagetext").val(),

    };

    console.log(message);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Message/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(message),
        statusCode:{
            201:function(){
                alert('Se ha actualizado el mensaje');
            }
        },
    });
}


//=======================================
// EDITAR RESERVA
//=======================================


function editarReservacion(){
    console.log("ejecutando funcion para actualizar");

    let reserva = {
        date: +$("#date").val(),
        dateDev: $("#messagetext").val(),

    };

    console.log(reserva);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Reservation/update",
        type: 'PUT',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reserva),
        statusCode:{
            201:function(){
                alert('Se ha actualizado la reservacion');
            }
        },
    });
}

