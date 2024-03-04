import ProductSlider from "../ProductSlider/ProductSlider";
import styles from "./NewProductSlider.module.css";

const NewProductSlider = () => {
  return (
    <div>
      <div className={styles.categoryTitleContainer}>
        <div className={styles.categoryTitle}>
          <p>New Products</p>
        </div>
        <div className={styles.seeAllButton}>
          <p>see all products</p>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <ProductSlider
          arr={[
            {
              productName: "demo1",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo2",
              offerPrice: 123,

              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",

              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",

              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
            {
              productName: "demo3",
              offerPrice: 123,
              productPrice: 123,
              productQuantity: 12,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default NewProductSlider;
