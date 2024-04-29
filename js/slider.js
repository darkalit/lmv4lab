function initSlider() {
  const imageList = document.querySelector(".slider-wrapper .image-list");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;
  const slideButtons = document.querySelectorAll(
    ".slider-wrapper .slide-button",
  );

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(imageList.scrollLeft, maxScrollLeft);
      const direction = button.id === "prev-slide" ? -1 : 1;

      let scrollAmount = imageList.clientWidth * direction;

      if (imageList.scrollLeft >= (maxScrollLeft - 20) && direction > 0) {
        scrollAmount = -imageList.scrollWidth;
      }
      if (imageList.scrollLeft <= 20 && direction < 0) {
        scrollAmount = imageList.scrollWidth;
      }

      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
}

window.addEventListener("load", initSlider);
