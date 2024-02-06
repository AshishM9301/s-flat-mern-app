
import React, { useEffect, useState } from "react";
import styles from "./BannerSlider.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

type Props = {};

const BannerSlider = (props: Props) => {
  const images = [
    {
      imgUrl:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      imgUrl:
        "https://images.unsplash.com/photo-1692970095410-6bd548fc7f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.container}>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((item, index) => (
            <div className={styles.img_container} key={index.toString()}>
              <img src={item.imgUrl} alt="banner-img" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
