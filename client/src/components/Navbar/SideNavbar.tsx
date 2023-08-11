import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import classNames from "classnames";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleDown,
  faChevronLeft,
  faChevronRight,
  faCookie,
  faCookieBite,
  faFlask,
  faHome,
  faPlus,
  faPlusCircle,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import SideBarMenuItem from "./SideBarMenuItem";

type Props = {};

const SideNavbar = (props: Props) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const menus = [
    {
      icon: <FontAwesomeIcon icon={faHome} />,
      title: "Home",
      onClick: () => navigate("/admin/home"),
    },
    {
      icon: <FontAwesomeIcon icon={faPlusCircle} />,
      title: "Add",
      submenu: [
        {
          icon: <FontAwesomeIcon icon={faTableCellsLarge} />,
          title: "Add Category",
          onClick: () => navigate("/admin/add-category"),
        },
        {
          icon: <FontAwesomeIcon icon={faFlask} />,
          title: "Add Series",
          onClick: () => navigate("/admin/add-series"),
        },
        {
          icon: <FontAwesomeIcon icon={faCookie} />,
          title: "Add Product",
          onClick: () => navigate("/admin/add-product"),
        },
      ],
    },
    {
      icon: <FontAwesomeIcon icon={faCookieBite} />,
      title: "My Products",
      onClick: () => navigate("/admin/my-products"),
    },
  ];

  return (
    <>
      <div className={styles.sidebar_container}>
        <div
          style={{
            borderRight: "1px solid #000",
            paddingTop: 24,
            paddingBottom: 24,
            position: "fixed",
            height: "100vh",
            minWidth: open ? 240 : 40,
          }}
        >
          <div className={styles.flex} style={{ justifyContent: "center" }}>
            <Link
              to="/"
              className={classNames(styles.py5, styles.zindex_5, styles.flex)}
            >
              <img src={logo} />
            </Link>
            <div className={!open ? styles.open_button : styles.close_button}>
              <button onClick={() => setOpen(!open)}>
                <FontAwesomeIcon
                  icon={!open ? faChevronRight : faChevronLeft}
                  color="#000"
                />
              </button>
            </div>
          </div>
          <div className={styles.sidebar_menu}>
            {menus.map((item, index) => (
              <SideBarMenuItem
                key={index.toString()}
                title={item.title}
                icon={item.icon}
                submenu={item.submenu}
                open={open}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
        <div
          className={styles.sidebar_page}
          style={{ paddingLeft: !open ? 125 : 300 }}
        >
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
