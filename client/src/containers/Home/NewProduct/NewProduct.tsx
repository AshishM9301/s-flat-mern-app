import Slider from "react-slick";
import ProductCard from "../../../components/ProductCard/ProductCard";
import styles from "./NewProduct.module.css";
import { useState } from "react";
const NewProduct = () => {
  const products = [
    {
      productName:
        "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$599",
      price: "$499",
      rating: "4",
      review: "4",
    },
    {
      productName: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$899",
      price: "$299",
      rating: "3",
      review: "10",
    },
    {
      productName:
        "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$599",
      price: "$499",
      rating: "4",
      review: "4",
    },
    {
      productName: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$899",
      price: "$299",
      rating: "3",
      review: "10",
    },
    {
      productName:
        "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH All-In-On...",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$599",
      price: "$499",
      rating: "4",
      review: "4",
    },
    {
      productName: "EX DISPLAY : MSI Pro 16 Flex-036AU 15.6",
      images: [
        {
          imgUrl:
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2",
        },
      ],
      offerprice: "$899",
      price: "$299",
      rating: "3",
      review: "10",
    },
  ];

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <div className={`container ` + styles.mt4}>
      <h2 className={styles.heading_title}>New Products</h2>
      <div>
        <Slider {...settings}>
          {products.map((item, index) => (
            <ProductCard
              inStock={""}
              images={item?.images}
              productName={item?.productName}
              productDescription={""}
              rating={item?.rating}
              offerprice={item?.offerprice}
              price={item?.price}
              review={item?.review}
              key={index.toString()}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default NewProduct;
