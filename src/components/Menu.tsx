const Menu = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active-nav");
    document.querySelector("nav")?.classList.toggle("hidden");
  };

  return (
    <div className="flex gap-8 items-center">
      {/* <a
        href="https://palmaresnaturehousing.reservadirecto.com/lp.html?pos=PalmaresNatureHousing&lng=es&cur=ARS&webcache=off&tag=PmsLink&appID=111"
        target="_blank"
        className="border-2 border-white py-2 px-6 hover:bg-white hover:text-black transition-all hidden lg:block"
        rel="noopener noreferrer"
      >
        Reservas
      </a> */}
      <div id="nav-menu" onClick={OpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Menu;
