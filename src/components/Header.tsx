import LogoContainer from "./LogoContainer";
import Nav from "./Nav";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="w-full px-14 py-6 lg:py-8 flex items-center justify-between">
      <div className="flex-grow basis-0">
        <a
          href="https://palmaresnaturehousing.reservadirecto.com/lp.html?pos=PalmaresNatureHousing&lng=es&cur=ARS&webcache=off&tag=PmsLink&appID=111"
          target="_blank"
          className="border-2 border-white py-2 px-6 hover:bg-white hover:text-black transition-all inline-block lg:hidden text-white"
          rel="noopener noreferrer"
        >
          Reservas
        </a>
      </div>
      <div>
        <LogoContainer />
      </div>
      <div className="flex flex-grow basis-0 justify-end">
        <Menu />
      </div>

      <Nav />
    </div>
  );
};

export default Header;
