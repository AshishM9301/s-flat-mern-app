import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import styles from "./Navbar.module.css";

type Props = {};

const NormalNavbar = (props: Props) => {
  return (
    <>
      <Link
        to="/login"
        className={classNames(styles.text_black, styles.text_link)}
      >
        Login
      </Link>
    </>
  );
};

export default NormalNavbar;
