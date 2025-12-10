// Encapsular para seguridad
document.addEventListener('DOMContentLoaded', () => {
  console.log("Scripts cargados");

  // ELEMENTOS
  const fotoPerfil = document.getElementById('fotoPerfil');
  const submenuPerfil = document.getElementById('submenuPerfil');
  const ventanaRegistro = document.getElementById('ventanaRegistro');
  const btnRegistro = document.getElementById('btnRegistro');
  const closeRegistro = document.getElementById('closeRegistro');
  const formRegistro = document.getElementById('formRegistro');

  // SUBMENU perfil
  if (fotoPerfil && submenuPerfil) {
    fotoPerfil.addEventListener('click', (e) => {
      e.stopPropagation();
      const visible = submenuPerfil.classList.toggle('hidden');
      submenuPerfil.setAttribute('aria-hidden', visible ? 'false' : 'true');
    });

    // click fuera cierra submenu
    document.addEventListener('click', (e) => {
      if (!submenuPerfil.classList.contains('hidden') && !submenuPerfil.contains(e.target) && e.target !== fotoPerfil) {
        submenuPerfil.classList.add('hidden');
        submenuPerfil.setAttribute('aria-hidden', 'true');
      }
    });
  }

  // MODAL registro
  if (btnRegistro && ventanaRegistro) {
    btnRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.remove('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'false');
    });
  }
  if (closeRegistro) {
    closeRegistro.addEventListener('click', () => {
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
    });
  }
  if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Registro completado. (demo)");
      ventanaRegistro.classList.add('hidden');
      ventanaRegistro.setAttribute('aria-hidden', 'true');
      formRegistro.reset();
    });
  }

  // LIGHTBOX (abrir imagen)
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
        lightbox.setAttribute('aria-hidden', 'false');
      });
    });

    function closeLB() {
      lightbox.setAttribute('aria-hidden', 'true');
      lbImage.src = '';
      lbTitle.textContent = '';
    }

    lbClose.addEventListener('click', closeLB);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLB();
    });
  }
});
