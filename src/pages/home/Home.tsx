import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import Layout from "../../layout/Layout";
import HomeSection from "./HomeSection";
import Acercade from "./Acercade";
import Servicios from "./Servicios";
import Galeria from "./Galeria";
import Contacto from "./Contacto";

type HomeProps = {
  goto: string;
};

const Home = ({ goto }: HomeProps) => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    setHomeSection(true);
    const targetElement = document.querySelector(`#${goto}`) as HTMLElement;
    window.scrollTo({
      top: targetElement.offsetTop - 90,
      behavior: "smooth",
    });
  }, [goto, setHomeSection]);

  return (
    <Layout>
      <HomeSection />
      <Acercade />
      <Servicios />
      <Galeria />
      <Contacto />
      <Helmet>
        <title>Palmares Nature Housing</title>
        <meta name="description" content="Mini complejo en el campo estilo colonial/moderno fusionado" />
      </Helmet>
    </Layout>
  );
};

export default Home;
