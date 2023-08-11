import React, { useState } from "react";
import Slider from "infinite-react-carousel";

type Props = { images: Array<string> };

const ImageSlider = (props: Props) => {
  const [settings, setSettings] = useState({ dots: true, autoplay: true });

  return (
    <div>
      <Slider {...settings}>
        {props.images.map((item, index) => (
          <div>
            <img
              src={item?.image}
              style={{
                width: "100%",
                height: 400,
                borderRadius: 6,
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
