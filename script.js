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
  
});