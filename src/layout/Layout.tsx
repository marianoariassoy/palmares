import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  useEffect(() => {
    const header = document.querySelector("header");

    function changeHeaderBackground() {
      if (window.scrollY > 100) {
        header.classList.add("bg-primary");
      } else {
        header.classList.remove("bg-primary");
      }
    }

    window.addEventListener("scroll", changeHeaderBackground);
  }, []);

  return (
    <>
      <header className="fixed w-full text-white z-40 transition-colors">
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
