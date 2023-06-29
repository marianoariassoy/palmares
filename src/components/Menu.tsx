const Menu = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active");
    document.querySelector("nav")?.classList.toggle("hidden");
  };

  return (
    <div className="flex gap-8 items-center">
      <a href="http://" target="_blank" className="border border-white py-2 px-4 hover:bg-white hover:text-black transition-all hidden lg:block" rel="noopener noreferrer">
        Reservas
      </a>
      <div id="nav-menu" onClick={OpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Menu;
