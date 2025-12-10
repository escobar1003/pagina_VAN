console.log("Header cargado correctamente");

const fotoPerfil = document.getElementById('fotoPerfil');
const submenuPerfil = document.getElementById('submenuPerfil');
const ventanaRegistro = document.getElementById('ventanaRegistro');
const btnRegistro = document.getElementById('btnRegistro');

// Mostrar/ocultar submenú al hacer click en la foto
fotoPerfil.addEventListener('click', () => {
  submenuPerfil.style.display = submenuPerfil.style.display === 'block' ? 'none' : 'block';
});

// Mostrar ventana de registro al hacer click en el botón
btnRegistro.addEventListener('click', () => {
  ventanaRegistro.style.display = 'block';
});

// Ocultar ventana al enviar formulario
ventanaRegistro.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Registro completado");
  ventanaRegistro.style.display = 'none';
});