
// FOOTER
console.log("Footer cargado correctamente.");

// HEADER


document.addEventListener("DOMContentLoaded", () => {
  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lbImage = document.getElementById("lbImage");
  const lbTitle = document.getElementById("lbTitle");
  const lbClose = document.getElementById("lbClose");

  document.querySelectorAll(".clickable").forEach(img => {
    img.addEventListener("click", () => {
      const src = img.getAttribute("src");
      const title = img.dataset.title || img.alt || "";
      lbImage.src = src;
      lbImage.alt = title;
      lbTitle.textContent = title;
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

   function closeLB() {
    lightbox.setAttribute("aria-hidden", "true");
    lbImage.src = "";
    lbTitle.textContent = "";
  }
  lbClose.addEventListener("click", closeLB);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLB();
  });
  

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