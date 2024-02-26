import { faQuoteLeftAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ReviewCard.module.css";

const ReviewCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reviewTextContainer}>
        <div className={styles.quoteContainer}>
          <p>
            <FontAwesomeIcon icon={faQuoteLeftAlt} />
          </p>
        </div>
        <div>
          <div className={styles.reviewText}>
            <p>
              My first order arrived today in perfect condition. From the time I
              sent a question about the item to making the purchase, to the
              shipping and now the delivery, your company, Tecs, has stayed in
              touch. Such great service. I look forward to shopping on your site
              in the future and would highly recommend it.
            </p>
          </div>
          <div className={styles.reviewWritterName}>
            <p>- Tama Brown</p>
          </div>
          <div className={styles.reviewButtonContainer}>
            <button className={styles.reviewButton}>
              <p>Leave Us A Review</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
