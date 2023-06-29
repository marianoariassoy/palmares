import { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import WaComponent from "../../components/WaComponent";
import useFetch from "../../hooks/useFetch";

type DataProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Home = ({ name }) => {
  const [id, setId] = useState(15);

  useEffect(() => {
    name === "casa colonial" ? setId(15) : setId(16);
  }, [name]);

  const { data, loading } = useFetch(`/imagenes/${id}`) as DataProps;

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <div className="absolute bottom-0 px-14 py-20 z-20">
        <h1 className="text-6xl lg:text-7xl font-tertiary text-white title-primary-left">{name}</h1>
      </div>
      <WaComponent />
      <div className="absolute w-full h-full bg-black bg-opacity-40 z-10"></div>
      <div className="h-screen">{!loading && <Slider data={data} autoplay={false} arrows={true} />}</div>
    </section>
  );
};

export default Home;
