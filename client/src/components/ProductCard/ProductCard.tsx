import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { Img } from "../../types";
import FormatedPrice from "../FormattedPrice/FormattedPrice";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./ProductCard.module.css";

type Props = {
  inStock: string;
  images: Array<Img>;
  rating: string;
  productName: string;
  productDescription?: string;
  offerprice: number;
  price: number;
  review?: number;
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

      <div className={styles.productTextContainer}>
        {props.rating && (
          <div className={styles.customerDetailContainer}>
            <Rating
              readonly
              initialRating={4}
              fractions={2}
              emptySymbol={<FontAwesomeIcon icon={faStar} color="gray" />}
              fullSymbol={<FontAwesomeIcon icon={faStar} color="orange" />}
            />
            {props?.review && (
              <div className={styles.review}>
                <p>Review ({props?.review})</p>
              </div>
            )}
          </div>
        )}

        {props.productName && (
          <div className={styles.productName}>
            <p>
              {props.productName.length > 50
                ? props.productName.substring(0, 50) + " ..."
                : props.productName}
            </p>
          </div>
        )}
        {props.productDescription && (
          <div>
            <p>{props.productDescription}</p>
          </div>
        )}
        <div className={styles.priceContainer}>
          {props.offerprice && (
            <div className={styles.offerPrice}>
              <p>
                <FormatedPrice amount={props.offerprice} />
              </p>
            </div>
          )}
          {props.price && (
            <div className={styles.price}>
              <p>
                <FormatedPrice amount={props.price} />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
