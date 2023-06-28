import { useEffect } from "react";
import ImageComponent from "../../components/ImageComponent";
import { changeColor } from "../../utils/headerColor";

const Acercade = () => {
  useEffect(() => {
    changeColor("#acercade");
  }, []);

  return (
    <section id="acercade">
      <div className="relative w-full max-w-7xl mx-auto lg:flex items-center px-14 py-14">
        <div className="text-primary pt-12 lg:pt-0 lg:w-2/3 lg:pr-24">
          <h1 className="text-5xl lg:text-6xl font-light mb-4">
            Let’s feel <br /> the nature.
          </h1>
          <p className="mb-4 text-wrap-balance">Mini complejo en el campo estilo colonial/moderno fusionado, cuenta con:</p>
          <h2 className="mb-4 font-tertiary text-3xl ">Casa Colonial:</h2>
          <p className="mb-4 text-wrap-balance">
            Equipada para 6 personas, asador, horno a leña , fogón, galería, aire acondicionado frio/calor, cocina , baño completo toilette, dos dormitorios, ropa de cama, cocina equipada, wifi y piscina. Contamos con una carta a su disposición para
            solicitar desayuno o picadas.
          </p>
          <h2 className="mb-4 font-tertiary text-3xl ">Tiny House:</h2>
          <p className="mb-4 text-wrap-balance">Un dormitorio, cama matrimonial, un baño completo, kitchenette, piscina y estacionamiento . Contamos con una carta a su disposición para solicitar desayuno o picadas.</p>
        </div>
        <div className="relative text-primary lg:w-2/6">
          <ImageComponent src="/images/pic1.png" alt="Imagen casas" />
          <div className="absolute -right-4 -bottom-20 flex justify-end">
            <img src="/images/iso.png" />
          </div>
        </div>
        <div className="absolute -bottom-20">
          <img src="./images/sketch.png" className="-mb-2" />
        </div>
      </div>
    </section>
  );
};

export default Acercade;
