const BgHeader = function (): void {
  const header = document.getElementById("header");
  const scrollY = 50;

  const changeHeaderBackground = () => {
    if (window.scrollY > scrollY) {
      header.classList.add("bg-primary");
    } else {
      header.classList.remove("bg-primary");
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);
};

export default BgHeader;
