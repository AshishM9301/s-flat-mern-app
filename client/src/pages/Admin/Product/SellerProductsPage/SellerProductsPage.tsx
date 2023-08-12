import React, { useEffect, useState } from "react";
import { useSellerProductMutation } from "../../../../store/services/adminApi";

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

  return <div>SellerProductsPage</div>;
};

export default SellerProductsPage;
