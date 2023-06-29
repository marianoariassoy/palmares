import { Helmet } from "react-helmet";
import { useDataContext } from "../../context/useDataContext";
import { useEffect } from "react";
import Layout from "../../layout/Layout";
import HomeHouses from "../houses/HomeHouses";
import Descripcion from "./Descripcion";

type HousesProps = {
  name: string;
};

const Houses = ({ name }: HousesProps) => {
  const { setHomeSection } = useDataContext();

  useEffect(() => {
    setHomeSection(false);
  }, [setHomeSection]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [name]);

  return (
    <Layout>
      <HomeHouses name={name} />
      <Descripcion name={name} />

      <Helmet>
        <title>Palmares {name[0].toUpperCase() + name.substring(1)} </title>
        <meta name="description" content="Mini complejo en el campo estilo colonial/moderno fusionado" />
      </Helmet>
    </Layout>
  );
};

export default Houses;
