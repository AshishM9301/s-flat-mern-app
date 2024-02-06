import styles from "./BannerSlider.module.css";

interface Props {
  dealName?: string;
  bannerTitle: string;
  bannerDesc?: string;
  bannerButtonText?: string;
  bannerTips?: string;
}

const SliderText = ({
  dealName,
  bannerTitle,
  bannerDesc,
  bannerButtonText,
  bannerTips,
}: Props) => {
  return (
    <div className={styles.bannerTextContainer}>
      {dealName && (
        <div className={styles.dealText}>
          <p>{dealName}</p>
        </div>
      )}
      <div className={styles.bannerTitleContainer}>
        <div className={styles.bannerTitle}>
          <p>{bannerTitle}</p>
        </div>
        {bannerDesc && (
          <div className={styles.bannerDescription}>
            <p>{bannerDesc}</p>
          </div>
        )}
      </div>
      <div className={styles.bannerButtonContainer}>
        {bannerButtonText && (
          <div className={styles.bannerButton}>
            <button>{bannerButtonText}</button>
          </div>
        )}
        {bannerTips && (
          <div className={styles.bannerTipsText}>
            <p>{bannerTips}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SliderText;
