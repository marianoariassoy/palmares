import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import { useEffect } from "react";
import Layout from "../../layout/Layout";
import HomeSection from "./HomeSection";
import Acercade from "./Acercade";
import Servicios from "./Servicios";
import Galeria from "./Galeria";
import Contacto from "./Contacto";

const Home = () => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    setHomeSection(true);
  }, [setHomeSection]);

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
