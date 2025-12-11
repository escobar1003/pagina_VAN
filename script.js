// Header: submenu y modal (funciona con .hidden)
document.addEventListener('DOMContentLoaded', () => {
  console.log('Header cargado correctamente');

  const fotoPerfil = document.getElementById('fotoPerfil');
  const submenuPerfil = document.getElementById('submenuPerfil');
  const ventanaRegistro = document.getElementById('ventanaRegistro');
  const btnRegistro = document.getElementById('btnRegistro');
  const closeRegistro = document.getElementById('closeRegistro');
  const formRegistro = document.getElementById('formRegistro');

  // Si faltan elementos, avisamos en consola
  if (!fotoPerfil) console.warn('fotoPerfil no encontrado');
  if (!submenuPerfil) console.warn('submenuPerfil no encontrado');
  if (!ventanaRegistro) console.warn('ventanaRegistro no encontrado');
  if (!btnRegistro) console.warn('btnRegistro no encontrado');

  // Toggle submenu al hacer click en la foto
  if (fotoPerfil && submenuPerfil) {
    fotoPerfil.addEventListener('click', (e) => {
      e.stopPropagation();
      submenuPerfil.classList.toggle('hidden');
      const hidden = submenuPerfil.classList.contains('hidden');
      submenuPerfil.setAttribute('aria-hidden', hidden ? 'true' : 'false');
    });

    // click fuera cierra submenu
    document.addEventListener('click', (e) => {
      if (!submenuPerfil.classList.contains('hidden') && !submenuPerfil.contains(e.target) && e.target !== fotoPerfil) {
        submenuPerfil.classList.add('hidden');
        submenuPerfil.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // Abrir modal registro
  if (btnRegistro && ventanaRegistro) {
    btnRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.remove('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'false');
    });
  }

  // Cerrar modal (botón X)
  if (closeRegistro && ventanaRegistro) {
    closeRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
    });
  }

  // Envío del formulario dentro del modal
  if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registro completado');
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
      formRegistro.reset();
    });
  }
});
