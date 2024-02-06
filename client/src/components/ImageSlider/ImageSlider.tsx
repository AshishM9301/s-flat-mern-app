
import React, { useState } from "react";
import Slider from "react-slick";
type Props = { images: Array<{ imgUrl: string }> };

const ImageSlider = (props: Props) => {
  const [settings, setSettings] = useState({
    infinite: true,
    speed: 500,
  });

  console.log("Img length", props?.images.length);


const ImageSlider = ({ images }: Props) => {
  return (
    <div className="slider-container">
      {props.images.length >= 2 ? (
        <Slider {...settings}>
          {props.images.map((item, index) => (
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
            src={props.images[0]?.imgUrl}
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
