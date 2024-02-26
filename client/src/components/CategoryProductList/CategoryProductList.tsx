import ProductList from "../ProductList/ProductList";
import styles from "./CategoryProductList.module.css";

interface Props {
  imgUrl: string;
  title: string;
}

const CategoryProductList = ({ imgUrl, title }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <div
          className={styles.categoryLeftBanner}
          style={{
            background: `url("${imgUrl}")center center,linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.4))`,
          }}
        >
          <p>{title}</p>
        </div>
        <div className={styles.productList}>
          <ProductList
            products={[
              {
                productName: "demo1",
                offerPrice: 12,
                productPrice: 123,
                productQuantity: 12,
              },
              {
                productName: "demo2",
                offerPrice: 12,
                productPrice: 123,
                productQuantity: 12,
              },
              {
                productName: "demo3",
                offerPrice: 12,
                productPrice: 123,
                productQuantity: 12,
              },
              {
                productName: "demo4",
                offerPrice: 12,
                productPrice: 123,
                productQuantity: 12,
              },
              {
                productName: "demo5",
                offerPrice: 12,
                productPrice: 123,
                productQuantity: 12,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryProductList;
