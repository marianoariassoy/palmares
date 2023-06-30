import { NavLink } from "react-router-dom";
import ImageComponent from "../../components/ImageComponent";

const Acercade = () => {
  return (
    <section id="acercade">
      <div className="relative w-full max-w-7xl mx-auto lg:flex items-center px-14 py-14">
        <div className="text-primary pt-12 lg:pt-0 lg:w-2/3 lg:pr-24">
          <h1 className="text-6xl lg:text-7xl font-light mb-4 font-secondary">
            Let’s feel <br /> the nature.
          </h1>
          <p className="mb-4 text-wrap-balance">Inmersos en medio de la naturaleza, desarrollamos PALMARES, un mini complejo turístico que fusiona el estilo colonial con el moderno para ofrecerte una estadía plancentera. Desconectate y disfrutá.</p>
          <NavLink to="/casa-colonial" className="mb-4 text-3xl font-tertiary block">
            Casa Colonial:
          </NavLink>
          <p className="mb-4 text-wrap-balance">
            Casa praparada para 6 personas. La misma cuenta con dos dormitorios, baño completo, toilette, cocina equipada, aire acondicionado frio/calor wifi. Amenities: galería, asador, horno a leña, fogón, piscina. Equipada con ropa de cama,
            accesorios de cocina, jabón, shampoo y acondicionador. Cuentan con el servicio de freegobar: Agua con y sin gas, gaseosas, vinos, cervezas, snack, cafetera dolce gusto y cápsulas.
          </p>
          <NavLink to="/tiny-house" className="mb-4 text-3xl font-tertiary block">
            Tiny House:
          </NavLink>
          <p className="mb-4 text-wrap-balance">
            2 Tiny houses, las mismas poseen un dormitorio con cama matrimonial, un baño completo y kitchenette. Equipadas con ropa de cama, accesorios de cocina, jabón, shampoo y acondicionador. Cuentan con el servicio de freegobar: Agua con y sin
            gas, gaseosas, vinos, cervezas, snack, cafetera dolce gusto y cápsulas. Piscina y estacionamiento en el complejo.
          </p>
        </div>
        <div className="relative text-primary lg:w-2/6">
          <ImageComponent src="/images/pic1.png" alt="Imagen casas" />
          <div className="absolute -right-4 -bottom-20 flex justify-end">
            <img src="/images/iso.png" />
          </div>
        </div>
        <div className="absolute -bottom-5">
          <img src="./images/sketch.png" className="-mb-2" />
        </div>
      </div>
    </section>
  );
};

export default Acercade;
