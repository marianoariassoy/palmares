import ImageComponent from "../../components/ImageComponent";

const Galería = () => {
  return (
    <section id="galeria">
      <div className="w-full flex flex-col h-screen lg:flex-row">
        <div className="w-full h-2/3 lg:w-1/3 lg:h-full">
          <ImageComponent src="./images/image1.jpg" alt="" />
        </div>
        <div className="w-full h-1/3 md:w-2/3 lg:h-full">
          <ImageComponent src="./images/image2.jpg" alt="" />
        </div>
      </div>

      <div className="w-full flex flex-col h-screen lg:flex-row">
        <div className="w-full h-1/2 lg:w-2/3 lg:h-full">
          <ImageComponent src="./images/image3.jpg" alt="" />
        </div>

        <div className="w-full flex flex-row lg:flex-col h-1/2 lg:w-1/3 lg:h-full">
          <div className="w-1/2 h-full lg:h-1/2 lg:w-full">
            <ImageComponent src="./images/image4.jpg" alt="" />
          </div>
          <div className="w-1/2 h-full lg:h-1/2 lg:w-full">
            <ImageComponent src="./images/image5.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Galería;
