import { Facebook } from "../icons/svgs";
import { Instagram } from "../icons/svgs";

const Social = () => {
  return (
    <div className="absolute z-30 bottom-8 left-0 px-14 text-white">
      <ul className="social-nav flex gap-4 items-center">
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
    </div>
  );
};

export default Social;
