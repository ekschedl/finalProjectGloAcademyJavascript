const accordeon = () => {
  const elements = document.querySelectorAll(".accordeon .element");

  elements.forEach((element) => {
    const title = element.querySelector(".title");
    const content = element.querySelector(".element-content");

    title.addEventListener("click", () => {
      elements.forEach((el) => {
        if (el !== element) {
          el.classList.remove("active");
          el.querySelector(".element-content").style.display = "none";
        }
      });

      element.classList.toggle("active");
      if (element.classList.contains("active")) {
        content.style.display = "block";
      } else {
        content.style.display = "none";
      }
    });
  });
};
export default accordeon;
