import { useEffect } from "react";
import ImageComponent from "../../components/ImageComponent";
import { changeColor } from "../../utils/headerColor";
import TextHTML from "../../hooks/useHTML";
import { Forward, Back, Night } from "../../icons/svgs";

const Description = ({ name }) => {
  useEffect(() => {
    changeColor("#descripcion");
  }, []);

  const housesText = [
    {
      id: 1,
      text: `Máximo 6 personas, asador, horno a leña , fogón,  galería, aire acondicionado frio/calor, cocina, baño completo, toilette, dos dormitorios, ropa de cama, cocina, equipada, wifi y piscina. 
      <br/><br/>
      Todo cuenta con ropa de cama y equipamiento en cocina y baño, jabón  shampoo, acondicionador.cuenta con el servicio de freegobar, agua con y sin gas, gaseosas, vinos, cervezas, snack, cafetera dolce gusto, capsulas.`,
    },
    {
      id: 2,
      text: `Tiny house un dormitorio cama matrimonial un baño completo kitchenette. Piscina  y estacionamiento. 
       <br/><br/>
      Todo cuenta con ropa de cama y equipamiento en cocina y baño, jabón  shampoo, acondicionador. cuenta con el servicio de freegobar , agua con y sin gas ,gaseosas, vinos, cervezas , snack ,cafetera dolce gusto , capsulas.`,
    },
  ];

  return (
    <section id="descripcion">
      <div className="relative w-full max-w-7xl mx-auto lg:flex items-start px-14 py-14">
        <div className="text-primary pt-12 lg:w-2/3 lg:pr-24">
          <p className="mb-4 text-wrap-balance text-xl">{name === "casa colonial" ? <TextHTML text={housesText[0].text} /> : <TextHTML text={housesText[1].text} />}</p>

          <section className="text-xl font-bold mt-16" id="hours">
            <div className="flex justify-between items-center mb-3 pb-3 border-b">
              <span> Check in 15 hs</span>
              <Forward />
            </div>
            <div className="flex justify-between items-center mb-3 pb-3 border-b">
              <span> Check out 10.</span>
              <Back />
            </div>
            <div className="flex justify-between items-center mb-3 pb-3">
              <span>Minimo 2 noches.</span>
              <Night />
            </div>
          </section>
        </div>
        <div className="relative text-primary lg:w-2/6">
          {name === "casa colonial" ? <ImageComponent src="/images/pic2.png" alt="Imagen casas" /> : <ImageComponent src="/images/pic3.png" alt="Imagen casas" />}

          <div className="absolute -right-4 -bottom-20 flex justify-end">
            <img src="/images/iso.png" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
