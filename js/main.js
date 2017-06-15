var api = {
  url: 'http://examen-laboratoria-sprint-5.herokuapp.com/topics'
}

var cargarPagina = function(){
  $('.modal').modal();
  cargarTemas();
}

var cargarTemas = function (){
  $.getJSON(api.url, function (temaforo){
    temaforo.forEach(crearPublicaciones);
  });
}

var crearPublicaciones = function (tema){
  var autor = tema.author_name;
  //creamos fila
  var $fila = $("<tr>");
  // creamos celda de autor
  var $celdaNombre = $("<td>");
  $celdaNombre.text(autor);
  // //agregar celda a fila
  $fila.append($celdaNombre);

  // //agregamos fila a tabla e imprimimos
  $("#listaTemas").append($fila);

}

$(document).ready(cargarPagina);
