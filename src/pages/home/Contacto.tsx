import Form from "../../components/Form";
import { changeColor } from "../../utils/headerColor";
import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    changeColor("#contacto");
  }, []);

  return (
    <section id="contacto">
      <div className="w-full max-w-7xl mx-auto px-14 py-24 pb-8">
        <h1 className="text-6xl lg:text-7xl font-tertiary mb-20 title-primary">Contacto</h1>
        <div className="lg:flex gap-8 items-end">
          <div className="lg:w-2/3">
            <Form />
          </div>
          <div className="lg:w-1/3 flex flex-col gap-4 items-center pb-16 mt-20 lg:mt-0">
            <img src="./icons/iso2.svg" />
            Ruta Provincial 88 Km. 4 <br /> Cerrillos - Salta - Argentina.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;