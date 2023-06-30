import { useEffect, useState } from "react";
import ImageComponent from "../../components/ImageComponent";
import TextHTML from "../../hooks/useHTML";
import { Forward, Back } from "../../icons/svgs";
import useFetch from "../../hooks/useFetch";
import Loader from "../../components/Loader";

const Description = ({ name }) => {
  const [houseName, sesHouseName] = useState("");

  useEffect(() => {
    name === "casa colonial" ? sesHouseName("casa-colonial") : sesHouseName("tiny-house");
  }, [name]);

  const { data, loading } = useFetch(`/${houseName}`);

  return (
    <section className="descripcion">
      {loading ? (
        <Loader />
      ) : (
        <div className="relative w-full max-w-7xl mx-auto lg:flex items-start px-14 py-14">
          <div className="text-primary pt-12 lg:w-2/3 lg:pr-24">
            <div className="mb-4 text-wrap-balance text-xl">
              <TextHTML text={data[0].text} />
            </div>

            <section className="text-xl font-bold mt-16 text-secondary mb-8" id="hours">
              <div className="flex justify-between items-center mb-3 pb-3 border-b">
                <span>{data[0].checkin}</span>
                <Forward />
              </div>
              <div className="flex justify-between items-center mb-3 pb-3 border-b">
                <span>{data[0].checkout}</span>
                <Back />
              </div>
              <div className="flex justify-between items-center mb-3 pb-3">
                <span>{data[0].nights}</span>
                <img src="./icons/night.svg" />
              </div>
            </section>

            <a href="http://" target="_blank" className="bg-primary py-3 px-6 hover:bg-black hover:text-white transition-all  text-white" rel="noopener noreferrer">
              Reservar
            </a>
          </div>
          <div className="relative text-primary lg:w-2/6">
            <ImageComponent src={data[0].image} alt="Imagen casas" />

            <div className="absolute -right-4 -bottom-20 flex justify-end">
              <img src="/images/iso.png" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Description;
