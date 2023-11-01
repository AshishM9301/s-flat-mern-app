/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
import styles from "./BannerSlider.module.css";
import SliderText from "./SliderText";

type img = {
  imgUrl: string;
  dealName?: string;
  bannerTitle: string;
  bannerDesc?: string;
  bannerButtonText?: string;
  bannerTips?: string;
};

type Props = {
  images: Array<img>;
};

const BannerSlider = (props: Props) => {
  // const [settings, setSettings] = useState({ dots: true, autoplay: true });

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {props.images.map((item, index) => (
          <div className={styles.sliderContainer} key={index.toString()}>
            <img
              src={item?.imgUrl}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 400,
                objectFit: "cover",
                position: "relative",
                zIndex: 0,
              }}
              alt="banner"
            />

            <SliderText
              bannerTitle={item.bannerTitle}
              bannerButtonText="Buy now"
              bannerDesc=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, maiores! Quas doloremque blanditiis accusantium quaerat iste laborum id."
              bannerTips=" Lorem ipsum, dolor sit amet consectetur adipisicing elit."
              dealName="Lofy Deal"
            />
            <div className={styles.bannerBottom} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;
