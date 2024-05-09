import { fadeIn, fadeOut } from "./helpers.js";

const modal = () => {
  const callbackBtns = document.querySelectorAll("a.callback-btn");
  const closeButton = document.querySelector(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");
  const buttonServices = document.querySelector(".button-services");
  const colSmFirstElement = document.querySelector(".col-sm-4.first");

  const openModal = () => {
    modalCallback.style.display = "block";
    modalOverlay.style.display = "block";
    fadeIn(modalCallback);
  };

  const closeModal = () => {
    fadeOut(modalCallback);
    setTimeout(() => {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }, 300);
  };

  callbackBtns.forEach((callbackBtn) => {
    callbackBtn.addEventListener("click", openModal);
  });

  buttonServices.addEventListener("click", openModal);

  colSmFirstElement.addEventListener("click", openModal);

  closeButton.addEventListener("click", closeModal);

  modalOverlay.addEventListener("click", closeModal);
};

export default modal;
