//===============================================
// CATEGORIA
//===============================================

function guardarCategoria(){
    let categoria = {
        name:  $("#Catname").val(),
        description: $("#Catdescription").val()
    };

    console.log("voy a guardar", categoria);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Category/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(categoria),
        statusCode:{
            201:function(){
                alert('Se ha registrado la categoria');
            }
        },
    });
} 



//===============================================
// COMPUTER
//===============================================

function guardarComputer(){
    let computador = {
        name:  $("#Cname").val(),
        brand: $("#brand").val(),
        year: +$("#year").val(),
        description: $("#description").val()
    };

    console.log("voy a guardar", computador);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Computer/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(computador),
        statusCode:{
            201:function(){
                alert('Se ha registrado el computador');
            }
        },
    });
} 



//===============================================
// CLIENTE
//===============================================

function guardarClient(){
    let client = {
        id: +$("#idClient").val(),
        email:  $("#email").val(),
        password: $("#password").val(),
        name: $("#Clname").val(),
        age: +$("#age").val()
    };

    console.log("voy a guardar", client);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Client/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(client),
        statusCode:{
            201:function(){
                alert('Se ha registrado el cliente');
            }
        },
    });
}



//===============================================
// MESSAGE
//===============================================

function guardarMessage(){
    let messages = {
        messageText: $("#message").val()
    };

    console.log("voy a guardar", messages);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Message/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(messages),
        statusCode:{
            201:function(){
                alert('Se ha registrado el mensaje');
            }
        },
    });
} 


//===============================================
// RESERVAS
//===============================================

function guardarReserva(){
    let reservas = {
        startDate: $("#date").val(),
        devolutionDate: $("#dateDev").val()
    };

    console.log("voy a guardar", reservas);

    $.ajax({
        url: "http://150.136.105.81:8080/api/Reservation/save",
        type: 'POST',
        dataType: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(reservas),
        statusCode:{
            201:function(){
                alert('Se ha registrado la reserva');
            }
        },
    });
} 