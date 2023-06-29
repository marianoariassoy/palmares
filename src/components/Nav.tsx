import { NavLink } from "react-router-dom";
import { navItems } from "../data/Data";
import { useDataContext } from "../context/useDataContext";

const Nav = () => {
  const { homeSection } = useDataContext();

  const closeMenu = () => {
    document.querySelector("#nav-menu").classList.remove("active");
    document.querySelector("nav").classList.add("hidden");
  };

  return (
    <nav className="fixed w-screen h-screen fade-in bg-primary top-0 right-0 -z-10 hidden transition-all">
      <div className="w-full h-full text-center p-8 flex justify-center items-center" onClick={closeMenu}>
        <ul className="font-tertiary text-3xl lg:text-4xl">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                {item.scroll && homeSection ? (
                  <a href={item.urlScroll} className="item-scroll nav-main">
                    {item.name}
                  </a>
                ) : (
                  <NavLink to={item.url} className="nav-main">
                    {item.name}
                  </NavLink>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
