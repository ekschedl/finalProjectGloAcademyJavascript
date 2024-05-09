const up = () => {
  window.addEventListener("scroll", () => {
    const up = document.querySelector(".up");
    const servicesSection = document.querySelector("#services");
    if (window.scrollY > servicesSection.offsetTop) {
      up.style.display = "block";
    } else {
      up.style.display = "none";
    }
  });

  document.querySelector(".up").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default up;
