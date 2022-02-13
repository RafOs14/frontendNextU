function cargarDatos() {

    var peticion = new XMLHttpRequest();
    peticion.open('GET', 'http://127.0.0.1:5500/datos.json');

    peticion.onload = function () {
        console.log(peticion);
    };
    peticion.send();
};

/*-------------------------------------------------*/

// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var proximos = [];
var pasados  = [];
var eventos;
var hoy;

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX

  $.ajax({
    url: "http://127.0.0.1:5500/info.json"
  }).done(function(resultado){  

  //Guarda el resultado en variables

  hoy = resultado.fechaActual;
  eventos = resultado.eventos;

  //Clasifica los eventos segun la fecha actual del JSON

  for(var i = 0; i < 2; i++){
    if (eventos[i].fecha < hoy){
      pasados.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  pasados = pasados.sort(function(x,y){
    if (x.fecha < y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos
  for(var i = 0; i < eventos.length; i++){
    if (eventos[i].fecha > hoy){
      proximos.push(eventos[i]);
    }
  }

  //Ordena los eventos segun la fecha (los mas cercanos primero)
  proximos = proximos.sort(function(x,y){
    if (x.fecha > y.fecha){
      return 1;
    }
    return -1;
  });

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  var html = "";

  //Recorre el arreglo y concatena el HTML para cada evento

  for(var j=0; j < 2; j++){
    html += `<div class="col-md-6"></div>
              <div class="card flex-md-row mb-4 h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                 <h3 class="mb-0">'
                    <a href="detalle.html?id=${proximos[j].id}">${proximos[j].nombre}</a></h3>
                  <div class="mb-1 text-muted">${proximos[j].fecha}</div>
                  <p class="card-text mb-auto">${proximos[j].descripcion}</p>
                </div>
              </div>
            </div>`
  }

  //Modifica el DOM agregando el html generado

  document.getElementById("proximos").innerHTML = html;

  //Crea un string que contenga el HTML que describe el detalle del evento
  var html2 = "";

  //Recorre el arreglo y concatena el HTML para cada evento
  for(var j=0; j < pasados.length; j++){
    html2 += `<div class="col-md-6"></div>
              <div class="card flex-md-row mb-4 h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                 <h3 class="mb-0">'
                    <a href="detalle.html?id=${pasados[j].id}">${pasados[j].nombre}</a></h3>
                  <div class="mb-1 text-muted">${pasados[j].fecha}</div>
                  <p class="card-text mb-auto">${pasados[j].descripcion}</p>
                </div>
              </div>
            </div>`
  }

  //Modifica el DOM agregando el html generado
  document.getElementById("pasados").innerHTML = html2;

});

});

/*--------------------------------------------------------*/

// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  
    //Carga los datos que estan en el JSON (info.json) usando AJAX
    $.ajax({
      url: "http://127.0.0.1:5500/info.json"
    }).done(function (resultado) {
  
    //Guarda el resultado en una variable
    eventos = resultado.eventos;
    //Busca el elemento en el arreglo
    var id = location.search.match(/id=(\d)*/)[1]
  
    evento = eventos.find(function (element) {
      return element.id == id
    })
    //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `
                  <h2>${evento.nombre}</h2>
                  <p>${evento.fecha}</p>
                  <p>Lugar: ${evento.lugar}</p
                  <p>Descripción: ${evento.descripcion}</p>
                  <p>Costo: ${evento.precio}</p>
                  <p>Invitados: ${evento.invitados}</p>
                  `
    //Modifica el DOM agregando el html generado dentro del div con id=evento
    document.getElementById("eventos").innerHTML = html;
  
    });
  });