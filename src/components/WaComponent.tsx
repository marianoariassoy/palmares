import { Whatsapp } from "../icons/svgs";

const WaComponent = () => {
  return (
    <a href="https://wa.me/#" target="_blank" rel="noreferrer" className="fixed z-20 bottom-8 right-8 drop-shadow text-primary">
      <Whatsapp />
    </a>
  );
};

export default WaComponent;
