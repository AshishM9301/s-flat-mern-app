import React, { useState } from "react";
import Slider from "react-slick";
type Props = { images: Array<{ imgUrl: string }> };

const ImageSlider = ({ images }: Props) => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
  });

  return (
    <div className="slider-container">
      {images.length >= 2 ? (
        <Slider {...settings}>
          {images.map((item, index) => (
            <div key={index.toString()}>
              <img
                src={item?.imgUrl}
                style={{
                  width: "100%",
                  maxHeight: 400,
                  borderRadius: 6,
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div>
          <img
            src={images[0]?.imgUrl}
            style={{
              width: "100%",
              maxHeight: 400,
              borderRadius: 6,
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
