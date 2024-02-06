import React from "react";
import BannerSlider from "../../components/BannerSlider/BannerSlider";
import ProductCard from "../../components/ProductCard/ProductCard";

import NewProduct from "../../containers/Home/NewProduct/NewProduct";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <div>
        <BannerSlider />
      </div>

      <div>
        <NewProduct />
      </div>
    </div>
  );
};

export default Home;
