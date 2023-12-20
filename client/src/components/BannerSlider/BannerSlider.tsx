import React, { useEffect, useState } from "react";
import styles from "./BannerSlider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type Props = {};

const BannerSlider = (props: Props) => {
  var [bannerImg, setBannerImg] = useState(
    "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  );

  let images = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1692970095410-6bd548fc7f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    },
  ];

  const changeImg = () => {
    let count = 1;
    setInterval(() => {
      console.log(count);
      setBannerImg(images[count - 1].imgUrl);
      if (count !== images.length) {
        count++;
      } else {
        count = 1;
      }
    }, 3000);
  };

  useEffect(() => {
    changeImg();
  }, []);

  const nextBanner = async () => {
    let count = images.findIndex((val) => val.imgUrl === bannerImg);

    console.log(
      count,

      "COunt"
    );
    try {
      if (count === images.length) {
        count = 0;
      } else {
        count++;
      }

      setBannerImg(images[count].imgUrl);
      console.log(bannerImg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left_button}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className={styles.img_container}>
        <img src={bannerImg} alt="banner-img" />
      </div>
      <div className={styles.right_button}>
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => {
            console.log("clicked");
            nextBanner();
          }}
        />
      </div>
    </div>
  );
};

export default BannerSlider;
