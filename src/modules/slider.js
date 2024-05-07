const slider = () => {
  const slides = document.querySelectorAll(".top-slider .item.relative");
  let currentSlide = 0;
  let intervalId;

  const sliderContainer = document.querySelector(".top-slider");

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
    const dotsContainer = document.createElement("ul");
    dotsContainer.classList.add("slick-dots");

    slides.forEach((slide, index) => {
      const dot = document.createElement("li");
      dot.classList.add("dot");

      dotsContainer.appendChild(dot);

      if (index === 0) {
        dot.classList.add("slick-active");
      }
    });

    sliderContainer.appendChild(dotsContainer);
  };

  const activateDot = (index) => {
    const dots = document.querySelectorAll(".slick-dots .dot");
    dots.forEach((dot, i) => {
      dot.classList.toggle("slick-active", i === index);
    });
  };

  createDots();

  const startAutoSlide = () => {
    intervalId = setInterval(nextSlide, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalId);
  };

  sliderContainer.addEventListener("mouseenter", stopAutoSlide);
  sliderContainer.addEventListener("mouseleave", startAutoSlide);

  startAutoSlide();
};

export default slider;
