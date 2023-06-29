import ImageComponent from "../../components/ImageComponent";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

type DataProps = {
  data: null | Array<{ id: number; image: string }>;
  loading: boolean;
};

const Galería = () => {
  const { data, loading } = useFetch(`/galeria`) as DataProps;

  if (loading) return <Loader />;

  return (
    <section id="galeria">
      <div className="w-full flex flex-col h-screen lg:flex-row">
        <div className="w-full h-2/3 lg:w-1/3 lg:h-full">{data[0].image && <ImageComponent src={data[0].image} alt="" />}</div>
        <div className="w-full h-1/3 md:w-2/3 lg:h-full">{data[1].image && <ImageComponent src={data[1].image} alt="" />}</div>
      </div>

      <div className="w-full flex flex-col h-screen lg:flex-row">
        <div className="w-full h-1/2 lg:w-2/3 lg:h-full">{data[2].image && <ImageComponent src={data[2].image} alt="" />}</div>
        <div className="w-full flex flex-row lg:flex-col h-1/2 lg:w-1/3 lg:h-full">
          <div className="w-1/2 h-full lg:h-1/2 lg:w-full">{data[3].image && <ImageComponent src={data[3].image} alt="" />}</div>
          <div className="w-1/2 h-full lg:h-1/2 lg:w-full">{data[4].image && <ImageComponent src={data[4].image} alt="" />}</div>
        </div>
      </div>

      {data[5]?.image && data[6]?.image && (
        <div className="w-full flex flex-col h-screen lg:flex-row">
          <div className="w-full h-2/3 lg:w-1/3 lg:h-full">{data[5].image && <ImageComponent src={data[5].image} alt="" />}</div>
          <div className="w-full h-1/3 md:w-2/3 lg:h-full">{data[6].image && <ImageComponent src={data[6].image} alt="" />}</div>
        </div>
      )}

      {data[7]?.image && data[8]?.image && data[9]?.image && (
        <div className="w-full flex flex-col h-screen lg:flex-row">
          <div className="w-full h-1/2 lg:w-2/3 lg:h-full">{data[7].image && <ImageComponent src={data[7].image} alt="" />}</div>
          <div className="w-full flex flex-row lg:flex-col h-1/2 lg:w-1/3 lg:h-full">
            <div className="w-1/2 h-full lg:h-1/2 lg:w-full">{data[8].image && <ImageComponent src={data[8].image} alt="" />}</div>
            <div className="w-1/2 h-full lg:h-1/2 lg:w-full">{data[9].image && <ImageComponent src={data[9].image} alt="" />}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galería;
