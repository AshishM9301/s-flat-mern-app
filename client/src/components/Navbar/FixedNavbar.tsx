import React from "react";

import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGrinStars } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import {
  faFacebook,
  faFacebookF,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

type Props = {};

const FixedNavbar = (props: Props) => {
  return (
    <div className={styles.fixed_color}>
      <div className={styles.fixed_container}>
        <div className={styles.date}>
          <div>
            <span>Mon-Thu : </span>
            <span className={styles.text_white}>9:00 AM - 5:30 PM</span>
            <button className={styles.dropdown_button}>
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
          </div>
        </div>
        <div className={styles.address}>
          <span>
            Visit our showroom in 1234 Street Adress City Address, 1234 Contact
            Us
          </span>
          <a className={classNames(styles.text_white, styles.px4)}>
            Contact Us
          </a>
        </div>
        <div className={classNames(styles.flex, styles.contact)}>
          <span>Call Us: (00) 1234 5678</span>
          <div
            className={classNames(styles.flex, styles.text_white, styles.px4)}
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FixedNavbar;
