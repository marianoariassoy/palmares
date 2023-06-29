import { Link } from "react-router-dom";
import { useDataContext } from "../context/useDataContext";

const LogoContainer = () => {
  const { homeSection } = useDataContext();

  return homeSection ? (
    <a href="#home" className="item-scroll logo">
      <img src="/assets/logo.svg" alt="" />
    </a>
  ) : (
    <Link to="/" className="logo">
      <img src="/assets/logo.svg" alt="" />
    </Link>
  );
};

export default LogoContainer;
