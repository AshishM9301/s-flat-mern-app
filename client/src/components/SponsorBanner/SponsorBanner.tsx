import adata from "../../assets/images/adata.png";
import gigabyte from "../../assets/images/gigabyte.png";
import hp from "../../assets/images/hp.png";
import msi from "../../assets/images/msi.png";
import razer from "../../assets/images/razer.png";
import roccat from "../../assets/images/roccat.png";
import thermaltake from "../../assets/images/thermaltake.png";

import styles from "./SponsorBanner.module.css";

const SponsorBanner = () => {
  const images = [
    { img: roccat },
    { img: adata },
    { img: hp },
    { img: gigabyte },
    { img: msi },
    { img: razer },
    { img: thermaltake },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.imagesContainer}>
        {images.map((item, index) => (
          <div key={index.toString()} className={styles.imgContainer}>
            <img src={item.img} alt="roccat-img" className={styles.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorBanner;
