const menu = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const topMenuLinks = document.querySelectorAll(".top-menu a");

    topMenuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const targetId = link.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  });
};
export default menu;
