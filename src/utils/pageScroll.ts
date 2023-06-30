const pageScroll = () => {
  const menuLinks = document.querySelectorAll(".item-scroll");

  menuLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 110,
      behavior: "smooth",
    });
  }
};

export default pageScroll;
