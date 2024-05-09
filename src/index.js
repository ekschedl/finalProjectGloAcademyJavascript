import modal from "./modules/modal";
import menu from "./modules/menu";
import slider from "./modules/slider";
import accordeon from "./modules/accordeon";

import up from "./modules/up";
import sendForm from "./modules/sendForm";
import swiperCarousel from "./modules/swiperCarousel";

modal();
menu();
slider();
accordeon();

up();
sendForm("form-callback");
sendForm("form-feedback");
sendForm("form-application");
swiperCarousel();
