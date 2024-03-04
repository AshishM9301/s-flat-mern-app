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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index.toString()}
            >
              <img
                src={item?.imgUrl}
                style={{
                  width: 150,
                  maxHeight: 150,
                  maxWidth: "100%",
                  objectFit: "cover",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </Slider>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={images[0]?.imgUrl}
            style={{
              width: 150,
              maxHeight: 150,
              maxWidth: "100%",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
