import React, { useEffect, useState } from "react";
import {
  useDeleteProductMutation,
  useSellerProductMutation,
} from "../../../../store/services/adminApi";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import Button from "../../../../components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Confirmation from "../../../../components/Confirmation/Confirmation";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {};

const SellerProductsPage = (props: Props) => {
  const [products, setProducts] = useState<Array<T>>();
  const [openConfirmation, setOpentConfirmation] = useState(false);
  const [productId, setProductId] = useState("");

  const [myProducts] = useSellerProductMutation();
  const [deleteMyProduct] = useDeleteProductMutation();

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

  const deleteProduct = async () => {
    try {
      await deleteMyProduct({ params: productId })
        .unwrap()
        .then((res) => {
          if (res.success) {
            console.log(res);
          }
        });
    } catch (err) {
      console.log(err);
    }
    setOpentConfirmation(false);
    // refresh
  };

  useEffect(() => {
    getAllMyProducts();
  }, [deleteProduct]);

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
              <Button
                title={<FontAwesomeIcon icon={faX} />}
                onCLick={() => {
                  setOpentConfirmation(true);
                  setProductId(item._id);
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {openConfirmation && (
        <Confirmation
          title={"Are you sure you want to Delete the Product?"}
          // details={"Hello"}
          actionButton={() => deleteProduct()}
          closeUpButton={() => setOpentConfirmation(false)}
        />
      )}
    </div>
  );
};

export default SellerProductsPage;
