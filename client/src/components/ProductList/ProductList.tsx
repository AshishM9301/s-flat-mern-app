import { ProductCard } from "../../types";
import Card from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

interface Props {
  products: Array<ProductCard>;
}

const ProductList = ({ products }: Props) => {
  // console.log(products);
  return (
    <div className={styles.products}>
      {products.map((item, index) => (
        <div key={index.toString()} className={styles.cardContainer}>
          <Card
            inStock={"2"}
            images={[
              {
                imgUrl:
                  "https://images.unsplash.com/photo-1695849118500-c8034bc651b6",
              },
            ]}
            rating={"3"}
            productName={item.productName}
            offerprice={item.offerPrice}
            price={item.productPrice}
            review={3}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
