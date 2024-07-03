import { useContext, useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import ProductosList from "../components/productos/ProductosList";

import { UserContext } from "../providers/UserProvider";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const Home = () => {
  //const {} = useContext(UserContext);

  return (
    <div className="container mt-5">
      <Carousel/>
      <ProductosList/>
    </div>
  );
};
export default Home;
