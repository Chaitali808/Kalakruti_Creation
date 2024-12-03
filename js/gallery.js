document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".image-grid .image");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlayImage");
  const closeBtn = document.getElementById("close");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const bgImage = getComputedStyle(image).backgroundImage;
      overlayImage.style.backgroundImage = bgImage;
      overlay.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
