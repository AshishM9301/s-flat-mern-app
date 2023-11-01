import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import styles from "./CompanySupportCard.module.css";

interface Props {
  icon: FontAwesomeIconProps;
  title: string;
  description: string;
}

const CompanySupportCard = ({ icon, title, description }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <div className={styles.icon}>
          <FontAwesomeIcon icon={icon} />
        </div>
      </div>
      <div className={styles.cartTitle}>
        <p>{title}</p>
      </div>
      <div className={styles.cardDesc}>{description}</div>
    </div>
  );
};

export default CompanySupportCard;
