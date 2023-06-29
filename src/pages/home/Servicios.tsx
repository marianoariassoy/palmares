import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

type DataProps = {
  data: null | Array<{ id: number; image: string; title: string }>;
  loading: boolean;
};

const Servicios = () => {
  const { data, loading } = useFetch(`/servicios`) as DataProps;

  return (
    <section className="bg-primary text-white" id="servicios">
      <div className="w-full max-w-7xl mx-auto px-14 py-24">
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-tertiary title-primary">Servicios</h1>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-12 text-center">
            {data.map((item) => (
              <div className="flex flex-col gap-2 items-center font-secondary" key={item.id}>
                <div className="h-20 flex items-center justify-center icons">
                  <img src={item.image} />
                </div>
                <div>{item.title}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Servicios;
