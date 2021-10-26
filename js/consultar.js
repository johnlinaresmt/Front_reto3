//===============================================
// CATEGORIA
//===============================================

function consultarCategoria() {

    $.ajax({
        url: "http://150.136.105.81:8080/api/Category/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaCategoria(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaCategoria(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>NAME</th>
                    <th>DESCRIPTION</th>
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].name}</td>
                   <td>${items[i].description}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarCategoria(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleCat.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaCat").html(tabla);
}


//===============================================
// COMPUTER
//===============================================

function consultarComputer() {

    $.ajax({
        url: "http://150.136.105.81:8080/api/Computer/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaComputer(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaComputer(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>NAME</th>
                    <th>BRAND</th>
                    <th>YEAR</th>
                    <th>DESCRIPTION</th>
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].name}</td>
                   <td>${items[i].brand}</td>
                   <td>${items[i].year}</td>
                   <td>${items[i].description}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarComputer(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalle.html?id=${items[i].id}">Editar</a>
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tabla").html(tabla);
}



//===============================================
// CLIENTE
//===============================================

function consultarClient() {

    $.ajax({
        url: "http://150.136.105.81:8080/api/Client/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaClient(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }
    });
}

function mostrarRespuestaClient(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>ID</th>
                    <th>EMAIL</th>
                    <th>PASSWORD</th>
                    <th>NAME</th>                    
                    <th>AGE</th>                    
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].idClient}</td>
                   <td>${items[i].email}</td>
                   <td>${items[i].password}</td>
                   <td>${items[i].name}</td>
                   <td>${items[i].age}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarClient(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleCliente.html?id=${items[i].id}">Editar</a>                   
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaClient").html(tabla);
}



//===============================================
// MESSAGE
//===============================================


function consultarMessage() {

    $.ajax({
        url: "http://150.136.105.81:8080/api/Message/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaMessage(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaMessage(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>MESSAGE</th>                   
                    <th>ACTIONS</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].messageText}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarMessage(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleMessage.html?id=${items[i].id}">Editar</a>                   
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaMessage").html(tabla);
}

//===============================================
// RESERVAS
//===============================================


function consultarReserva() {

    $.ajax({
        url: "http://150.136.105.81:8080/api/Reservation/all",
        type: 'GET',
        dataType: 'json',
        success: function (respuesta) {
            console.log(respuesta);
            mostrarRespuestaReservas(respuesta);
        },
        error: function (xhr, status) {
            alert('ha sucedido un problema');
        },
        complete: function (xhr, status) {
            //console.log(status);
        }

    });

}

function mostrarRespuestaReservas(items) {
    var tabla = `<table border="1">
                  <tr>
                    <th>FECHA INICIO</th>                   
                    <th>FECHA DEVOLUCION</th>
                  </tr>`;


    for (var i = 0; i < items.length; i++) {
        tabla += `<tr>
                   <td>${items[i].startDate}</td>
                   <td>${items[i].devolutionDate}</td>
                   <td>
                   <button class="btn-eliminar" onclick="eliminarMessage(${items[i].id})">Eliminar</button>
                   <a class="edicion" href="detalleReserva.html?id=${items[i].id}">Editar</a>                   
                   </td> 
                   </tr>`;
    }
    tabla += `</table>`;

    $("#tablaReservas").html(tabla);
}
