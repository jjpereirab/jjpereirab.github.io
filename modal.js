// DEFINICION DE VARIABLES JS
const floating_VAR = document.getElementById('floating_id');
const open1 = document.getElementById('open1');
const open2 = document.getElementById('open2');
const open3 = document.getElementById('open3');
const open4 = document.getElementById('open4');
const close = document.getElementById('close');

// METODOS QUE AGREGAN LOS ATRIBUTOS LA CLASE "show" A PARTIR DE CLICK AL OBJECTO CON ID "floating_id"
open1.addEventListener('click', () => {
	floating_VAR.classList.add('show');
});
open2.addEventListener('click', () => {
	floating_VAR.classList.add('show');
});
open3.addEventListener('click', () => {
	floating_VAR.classList.add('show');
});
open4.addEventListener('click', () => {
	floating_VAR.classList.add('show');
});

// METODO QUE QUITA LOS ATRIBUTOS LA CLASE "show" A PARTIR DE CLICK AL OBJECTO CON ID "floating_id"
close.addEventListener('click', () => {
  floating_VAR.classList.remove('show');
});
