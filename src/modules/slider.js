const slider = () => {
  const slides = document.querySelectorAll(".top-slider .item.relative");
  const dots = document.querySelectorAll(".slick-dots .dot");
  const sliderContainer = document.querySelector(".top-slider");

  let currentSlide = 0;
  let intervalId;

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
    activateDot(index);
  };

  const nextSlide = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  };

  const createDots = () => {
    dots.forEach((dot, index) => {
      dot.addEventListener("click", (e) => {
        e.preventDefault();
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
      });
    });
  };

  const activateDot = (index) => {
    dots.forEach((dot, i) => {
      dot.classList.toggle("slick-active", i === index);
    });
  };

  const startAutoSlide = () => {
    intervalId = setInterval(nextSlide, 3000);
  };

  const resetInterval = () => {
    clearInterval(intervalId);
    startAutoSlide();
  };

  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(intervalId);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    resetInterval();
  });

  showSlide(currentSlide);
  createDots();
  startAutoSlide();
};

export default slider;
