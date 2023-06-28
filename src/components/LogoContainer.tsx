import { Link } from "react-router-dom";
import { Logo } from "../icons/svgs";
import { useDataContext } from "../context/useDataContext";

const LogoContainer = () => {
  const { homeSection } = useDataContext();

  return homeSection ? (
    <a href="#home" className="item-scroll">
      <Logo />
    </a>
  ) : (
    <Link to="/">
      <img src="./icons/logo.png" />
    </Link>
  );
};

export default LogoContainer;
