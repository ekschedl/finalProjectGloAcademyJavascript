import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
const swiperCarousel = () => {
  console.log("gee");
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,

    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
};

export default swiperCarousel;
