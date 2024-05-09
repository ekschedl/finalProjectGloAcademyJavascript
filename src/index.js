import modal from "./modules/modal";
import menu from "./modules/menu";
import slider from "./modules/slider";
import accordeon from "./modules/accordeon";
import carousel from "./modules/carousel";
import up from "./modules/up";
import sendForm from "./modules/sendForm";

modal();
menu();
slider();
accordeon();
carousel();
up();
sendForm("form-callback");
sendForm("form-feedback");
sendForm("form-application");
