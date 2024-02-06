import styles from "./AdBanner.module.css";

import ad from "../../assets/ad.svg";

const AdBanner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bgcolor}>
        <div className={styles.adContainer}>
          <img src={ad} alt="banner-icon" className={styles.adImg} />
        </div>
        <div className={styles.adTextContainer}>
          <p>
            own it now, up to 6 months interest free
            <span>learn more</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
