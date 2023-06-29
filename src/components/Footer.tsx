import { useEffect } from "react";
// import { Logo } from "../icons/svgs";
import { Facebook } from "../icons/svgs";
import { Instagram } from "../icons/svgs";
import pageScroll from "../utils/pageScroll";
import { useDataContext } from "../context/useDataContext";

const Footer = () => {
  const { homeSection } = useDataContext();

  useEffect(() => {
    pageScroll();
  }, [homeSection]);
  return (
    <section className="bg-primary p-14 py-14 flex flex-col gap-8 items-center justify-center text-white">
      <img src="./assets/logo.svg" />

      <ul className="flex gap-4 items-center">
        <li>
          <a href="https://www.facebook.com/" target="_blank">
            <Facebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/palmares_housing" target="_blank">
            <Instagram />
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
