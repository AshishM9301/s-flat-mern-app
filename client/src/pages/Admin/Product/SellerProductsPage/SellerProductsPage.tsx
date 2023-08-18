import React, { useEffect, useState } from "react";
import { useSellerProductMutation } from "../../../../store/services/adminApi";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const SellerProductsPage = (props: Props) => {
  const [products, setProducts] = useState<Array<T>>();

  const [myProducts] = useSellerProductMutation();

  const getAllMyProducts = async () => {
    try {
      await myProducts({})
        .unwrap()
        .then((res) => {
          if (res.success) {
            console.log(res);
            setProducts(res.data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllMyProducts();
  }, []);

  return (
    <div>
      SellerProductsPage
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {products?.map((item, index) => (
          <div
            style={{ width: 200, height: 300, position: "relative" }}
            key={index.toString()}
          >
            <ProductCard
              inStock={item.inStock}
              images={item.images}
              rating={item.rating}
              productName={item.name}
              productDescription={item.productDesc}
              offerprice={item.offerPrice}
              price={item.price}
            />

            <div
              style={{
                position: "absolute",
                top: -30,
                right: -50,
                zIndex: 1,
              }}
            >
              <Button title={<FontAwesomeIcon icon={faX} />} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProductsPage;
