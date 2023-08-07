const div = document.querySelector('.contenedor');
div.addEventListener('click', function(event){
if(event.target!==document.querySelector('.boton')){
    alert('Hola soy el div');
}
 
});


