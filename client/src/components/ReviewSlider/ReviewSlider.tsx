import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import Slider from "react-slick";
import ReviewCard from "../ReviewCard/ReviewCard";
import styles from "./ReviewSlider.module.css";

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (
      dots:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
    ) => {
      return (
        <div
          style={{
            position: "absolute",
            bottom: "50px",
            right: "120px",
            width: "auto",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      );
    },
  };

  return (
    <div className={styles.container}>
      <div>
        <Slider {...settings}>
          <ReviewCard />
          <ReviewCard />
        </Slider>
      </div>
    </div>
  );
};

export default ReviewSlider;
