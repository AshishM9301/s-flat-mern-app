import { faCheckCircle, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";
import styles from "./ProductCard.module.css";
import FormatedPrice from "../FormattedPrice/FormattedPrice";

import { convertToSlug } from "../../services/convertToUrl";

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
    <Link
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      to={`/product/${convertToSlug(props.productName)}`}
      className={styles.d_product_card}
    >
      {Number(props.inStock) > 0 && (
        <div className={styles.instockContainer}>
          <FontAwesomeIcon size="xs" icon={faCheckCircle} color="green" />
          <p className={styles.instock}>in stock</p>
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
              emptySymbol={
                <FontAwesomeIcon size="xs" icon={faStar} color="#C4C4C4" />
              }
              fullSymbol={
                <FontAwesomeIcon size="xs" icon={faStar} color="#E9A426" />
              }
            />
            <div className={styles.review}>
              <p>Review ({props.review})</p>
            </div>
          </div>
        )}
      </div>

      {props.productName && (
        <div className={styles.productName}>
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
          <p>
            <FormatedPrice amount={Number(props.offerprice)} />
          </p>
        </div>
      )}
      {props.price && (
        <div className={styles.price}>
          <p>
            <FormatedPrice amount={Number(props.price)} />
          </p>
        </div>
      )}
    </Link>
  );
};

export default ProductCard;
