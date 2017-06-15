var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
}

var cargarPagina = function(){
  $('.modal').modal();
  cargarTemas();
  $("#nuevoTema").submit(agregarTema);
}

var cargarTemas = function (){
  $.getJSON(api.url, function (temaforo){
    temaforo.forEach(crearPublicaciones);
  });
}

var crearPublicaciones = function (tema){
  var contenido = tema.content;
  var autor = tema.author_name;
  var respuestas = tema.responses_count;
  //creamos fila
  var $fila = $("<tr>");
  //creamos celda de contenido
  var $celdaContenido = $("<td>");
  $celdaContenido.text(contenido);
  // creamos celda de autor
  var $celdaNombre = $("<td>");
  $celdaNombre.text(autor);
  //creamos celda de respuestas
  var $celdaRespuestas = $("<td>");
  $celdaRespuestas.text(respuestas);

  // //agregar celda a fila
  $fila.append($celdaContenido);
  $fila.append($celdaNombre);
  $fila.append($celdaRespuestas);

  // //agregamos fila a tabla e imprimimos
  $("#listaTemas").append($fila);
}

var agregarTema = function (e){
  e.preventDefault();
  var nombre = $("#autor").val();
  var mensaje = $("#mensaje").val();
  $.post(api.url, {
    author_name: nombre,
    content : mensaje
  }, function(tema){
    crearPublicaciones(tema);
    $("#modal-tema").modal("close");
  });
};


$(document).ready(cargarPagina);
