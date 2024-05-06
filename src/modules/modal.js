import { fadeIn, fadeOut } from "./helpers.js";

const modal = () => {
  const callbackBtns = document.querySelectorAll("a.callback-btn");
  const closeButton = document.querySelector(".modal-close");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalCallback = document.querySelector(".modal-callback");

  callbackBtns.forEach((callbackBtn) => {
    callbackBtn.addEventListener("click", () => {
      modalCallback.style.display = "block";
      modalOverlay.style.display = "block";
      fadeIn(modalCallback);
    });
  });

  closeButton.addEventListener("click", () => {
    fadeOut(modalCallback);
    setTimeout(() => {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }, 300);
  });

  modalOverlay.addEventListener("click", () => {
    fadeOut(modalCallback);
    setTimeout(() => {
      modalOverlay.style.display = "none";
      modalCallback.style.display = "none";
    }, 200);
  });
};

export default modal;
