import { dataServices } from "../../data/Data";
import { Icon1, Icon2, Icon3, Icon4, Icon5, Icon6, Icon7, Icon8, Icon9, Icon10, Icon11, Icon12 } from "../../icons/Icons";

const Servicios = () => {
  return (
    <section id="servicios" className=" bg-primary text-white">
      <div className="w-full max-w-7xl mx-auto px-14 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-tertiary title-primary">Servicios</h1>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-12 text-center">
          {dataServices.map((item) => (
            <div className="flex flex-col gap-2 items-center" key={item.num}>
              <div className="h-20 flex items-center justify-center icons">
                {item.num === 1 && <Icon1 />}
                {item.num === 2 && <Icon2 />}
                {item.num === 3 && <Icon3 />}
                {item.num === 4 && <Icon4 />}
                {item.num === 5 && <Icon5 />}
                {item.num === 6 && <Icon6 />}
                {item.num === 7 && <Icon7 />}
                {item.num === 8 && <Icon8 />}
                {item.num === 9 && <Icon9 />}
                {item.num === 10 && <Icon10 />}
                {item.num === 11 && <Icon11 />}
                {item.num === 12 && <Icon12 />}
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
