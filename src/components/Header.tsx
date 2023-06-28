import LogoContainer from "./LogoContainer";
import Nav from "./Nav";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="w-full px-14 py-8 flex justify-center">
      <LogoContainer />
      <Menu />
      <Nav />
    </div>
  );
};

export default Header;
