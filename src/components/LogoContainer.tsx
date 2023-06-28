import { Link } from "react-router-dom";
import { Logo } from "../icons/svgs";
import { useDataContext } from "../context/useDataContext";

const LogoContainer = () => {
  const { homeSection } = useDataContext();

  return homeSection ? (
    <a href="#home" className="item-scroll logo">
      <Logo />
    </a>
  ) : (
    <Link to="/" className="logo">
      <Logo />
    </Link>
  );
};

export default LogoContainer;
