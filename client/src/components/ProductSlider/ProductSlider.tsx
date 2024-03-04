import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Slider from "react-slick";
import { ProductCard } from "../../types";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";

import ProductList from "../ProductList/ProductList";
import styles from "./ProductSlider.module.css";

interface Props {
  listNo?: number;
  arr: Array<ProductCard>;
}

const defaultProps: Props = {
  listNo: 6,
  arr: [],
};

const ProductSlider = (props: Props) => {
  const [products, setProducts] = useState<ProductCard[][]>();

  const changeListing = (arr = props.arr) => {
    const no = 5;
    let netArr = arr.slice(0, 10);
    const result = [];

    do {
      if (netArr.length >= no) {
        result.push(netArr.slice(0, no));
        netArr = netArr.slice(no);
      } else {
        result.push(netArr);
        netArr = [];
      }
    } while (netArr.length > 0);

    setProducts(result);

    return result;
  };

  useEffect(() => {
    changeListing(props.arr);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    speed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        {products?.map((items, index) => (
          <div key={index.toString()} className={styles.products}>
            <ProductList products={items} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

ProductSlider.defaultProps = defaultProps;

export default ProductSlider;
