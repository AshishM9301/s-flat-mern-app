import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { Img } from "../../types";
import FormatedPrice from "../FormattedPrice/FormattedPrice";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./ProductCard.module.css";

type Props = {
  inStock: string;
  images: Array<{ imgUrl: string }>;
  rating: string;
  productName: string;
  productDescription: string;
  offerprice: string;
  price: string;
  review: string;

};

const ProductCard = (props: Props) => {
  return (
    <div className={styles.d_product_card}>
      {Number(props.inStock) > 0 && (
        <div className={styles.instockContainer}>
          <FontAwesomeIcon icon={faCheckCircle} color="green" />
          <p className={styles.instock}>Instock</p>
        </div>
      )}
      {props.images.length > 0 && <ImageSlider images={props.images} />}


      <div>
        {props.rating && (
          <div className={styles.flex}>

            <Rating
              readonly
              initialRating={4}
              fractions={2}
              emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />}
              fullSymbol={<FontAwesomeIcon icon={faStar} color="orange" />}
            />
            <div className={styles.review}>
              <p>Review ({props.review})</p>
            </div>
          </div>
        )}
      </div>

      {props.productName && (
        <div>
          <h3>{props.productName}</h3>
        </div>
      )}
      {props.productDescription && (
        <div>
          <p>{props.productDescription}</p>
        </div>
      )}
      {props.offerprice && (
        <div className={styles.offerPrice}>
          <p>{props.offerprice}</p>
        </div>
      )}
      {props.price && (
        <div className={styles.price}>
          <p>{props.price}</p>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
