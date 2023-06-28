const pageScroll = () => {
  const menuLinks = document.querySelectorAll(".item-scroll");

  menuLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    document.querySelector("#nav-menu").classList.remove("active");
    document.querySelector("nav").classList.add("hidden");

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

export default pageScroll;
