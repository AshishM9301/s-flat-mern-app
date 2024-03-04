import { faChevronCircleDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useState } from "react";
import styles from "./Navbar.module.css";

type Props = {
  open: boolean;
  icon: any;
  title: string;
  submenu?: Array<T>;
  onClick?: () => void;
};

const defaultProps: Props = {
  open: true,
  icon: <FontAwesomeIcon icon={faHome} />,
  title: "",
};

const SideBarMenuItem = (props: Props) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <div
      className={classNames(
        submenuOpen
          ? styles.sidebar_menu_container_with_sub
          : styles.sidebar_menu_container_without_sub,
        styles.sidebar_menu_container
      )}
      style={{
        paddingLeft: 32,
        paddingRight: 32,
      }}
      onClick={(e) => {
        e.preventDefault();
        props.submenu && setSubmenuOpen(!submenuOpen);
        props?.onClick;
      }}
    >
      <div
        className={classNames(styles.flex, styles.sidebar_menu_item)}
        style={{ justifyContent: "flex-start" }}
      >
        <p>{props.icon}</p>
        {props.open && (
          <p>
            {props.title}{" "}
            {props?.submenu && (
              <FontAwesomeIcon icon={faChevronCircleDown} size="2xs" />
            )}
          </p>
        )}
      </div>
      {submenuOpen &&
        props.submenu.map((item, index) => (
          <div
            className={classNames(styles.flex, styles.submenu_item)}
            style={{ justifyContent: "flex-start" }}
            onClick={() => {
              item.onClick();
            }}
          >
            <p>{item.icon}</p>
            {props.open && (
              <p>
                {item.title}{" "}
                {item?.submenu && (
                  <FontAwesomeIcon icon={faChevronCircleDown} size="2xs" />
                )}
              </p>
            )}
          </div>
        ))}
    </div>
  );
};

SideBarMenuItem.defaultProps = defaultProps;

export default SideBarMenuItem;
