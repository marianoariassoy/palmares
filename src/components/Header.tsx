import LogoContainer from "./LogoContainer";
import Nav from "./Nav";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="w-full px-14 lg:py-8 flex items-center justify-between">
      <div className="flex-grow basis-0">
        <a href="http://" target="_blank" className="border py-2 px-4 hover:bg-white hover:text-black transition-all " rel="noopener noreferrer">
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
