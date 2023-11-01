import Slider from "react-slick";
import { Img } from "../../types";
import styles from "./ImageSlider.module.css";

type Props = {
  images: Array<Img>;
};

const ImageSlider = ({ images }: Props) => {
  return (
    <div>
      <Slider>
        {images.map((item, index) => (
          <div className={styles.card}>
            <img
              src={item.imgUrl}
              alt={index.toString() + "img"}
              className={styles.cardImg}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
