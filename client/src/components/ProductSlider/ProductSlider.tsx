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
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 1000px)" });
  const isMobile = useMediaQuery({ query: "(max-width:500px)" });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const [products, setProducts] = useState<ProductCard[][]>();

  const changeListing = (arr = props.arr) => {
    const no = props?.listNo ? props?.listNo : isTablet ? 6 : 4;
    const result = [];
    do {
      if (arr.length >= no) {
        result.push(arr.slice(0, no));
        arr = arr.slice(no);
      } else {
        result.push(arr);
        arr = [];
      }
    } while (arr.length > 0);

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
