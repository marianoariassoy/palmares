import { Link } from "react-router-dom";
import { navItems } from "../data/Data";

const Nav = () => {
  return (
    <nav className="fixed w-screen h-screen fade-in bg-primary top-0 -z-10 hidden transition-all">
      <div className="w-full h-full text-center p-8 flex justify-center items-center">
        <ul className="font-tertiary text-4xl">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="mb-4">
                {item.scroll ? (
                  <a href={item.url} className="item-scroll nav-main">
                    {item.name}
                  </a>
                ) : (
                  <Link to={item.url} className="nav-main">
                    {item.name}
                  </Link>
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
