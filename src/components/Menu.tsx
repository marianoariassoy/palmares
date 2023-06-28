const Menu = () => {
  const OpenMenu = () => {
    document.querySelector("#nav-menu").classList.toggle("active");
    document.querySelector("nav")?.classList.toggle("hidden");
  };

  return (
    <div className="flex gap-4">
      <div className="text-sm">Menú</div>
      <div id="nav-menu" onClick={OpenMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Menu;
