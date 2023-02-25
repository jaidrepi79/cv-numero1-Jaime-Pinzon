document.addEventListener('DOMContentLoaded', function() {
  const botonDescargar = document.getElementById('boton-descargar');
  const mensajeAviso = document.getElementById('mensaje-aviso');

  botonDescargar.addEventListener('click', function() {
    mensajeAviso.style.display = 'block';
    setTimeout(function() {
      mensajeAviso.style.display = 'none';
    }, 3000);
  });

  botonDescargar.addEventListener('mouseover', function() {
    botonDescargar.style.transform = 'translateY(-5px)';
  });

  botonDescargar.addEventListener('mouseout', function() {
    botonDescargar.style.transform = 'translateY(0)';
  });
});






  
  
