document.addEventListener('DOMContentLoaded', () => {
  console.log("Scripts cargados");

  const fotoPerfil = document.getElementById('fotoPerfil');
  const submenuPerfil = document.getElementById('submenuPerfil');
  const ventanaRegistro = document.getElementById('ventanaRegistro');
  const btnRegistro = document.getElementById('btnRegistro');
  const closeRegistro = document.getElementById('closeRegistro');
  const formRegistro = document.getElementById('formRegistro');

  // Seguridad: verificar elementos
  if (!fotoPerfil) console.warn('fotoPerfil no encontrado');
  if (!submenuPerfil) console.warn('submenuPerfil no encontrado');
  if (!ventanaRegistro) console.warn('ventanaRegistro no encontrado');
  if (!btnRegistro) console.warn('btnRegistro no encontrado');

  // SUBMENU: toggle al click en la foto
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

  // MODAL: abrir con el botón
  if (btnRegistro && ventanaRegistro) {
    btnRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.remove('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'false');
    });
  }

  // cerrar modal con la X
  if (closeRegistro && ventanaRegistro) {
    closeRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
    });
  }

  // enviar formulario (demo)
  if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Registro completado (demo)");
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
      formRegistro.reset();
    });
  }

  // LIGHTBOX: abrir imagen al click
  const lightbox = document.getElementById('lightbox');
  const lbImage = document.getElementById('lbImage');
  const lbTitle = document.getElementById('lbTitle');
  const lbClose = document.getElementById('lbClose');

  if (lightbox && lbImage && lbTitle && lbClose) {
    document.querySelectorAll('.clickable').forEach(img => {
      img.addEventListener('click', () => {
        const src = img.getAttribute('src');
        const title = img.dataset.title || img.alt || '';
        lbImage.src = src;
        lbImage.alt = title;
        lbTitle.textContent = title;
        lightbox.classList.remove('hidden');
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    function closeLB() {
      lightbox.classList.add('hidden');
      lightbox.setAttribute('aria-hidden', 'true');
      lbImage.src = '';
      lbTitle.textContent = '';
    }

    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLB();
    });
  } else {
    // Si tu HTML no tiene un lightbox, no pasa nada; se ignora.
  }
});
