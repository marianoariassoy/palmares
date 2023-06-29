import { dataServices } from "../../data/Data";

const Servicios = () => {
  return (
    <section className=" bg-primary text-white" id="servicios">
      <div className="w-full max-w-7xl mx-auto px-14 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-tertiary title-primary">Servicios</h1>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-12 text-center">
          {dataServices.map((item) => (
            <div className="flex flex-col gap-2 items-center font-secondary" key={item.num}>
              <div className="h-20 flex items-center justify-center icons">
                <img src={`./icons/icon${item.num}.svg`} />
              </div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
