import React, { useEffect } from "react";

import {
  Link,
  Navigate,
  Outlet,
  useLocation,
  useMatches,
} from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthNavbar from "./AuthNavbar";
import NormalNavbar from "./NormalNavbar";
import FixedNavbar from "./FixedNavbar";
import logo from "../../assets/logo.svg";
import classNames from "classnames";
import styles from "./Navbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useMeMutation } from "../../store/services/authApi";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
  const { loginAuth, token, logout } = useAuth();
  const auth = useSelector((state: RootState) => state.auth);

  const menus = [
    {
      slug: "laptops",
      title: "Laptops",
    },
    {
      slug: "desktop",
      title: "Desktop PCs",
    },
    {
      slug: "network-devices",
      title: "Network Devices",
    },
    {
      slug: "printer-scanners",
      title: "Printer & Scanners",
    },
    {
      slug: "pc-ports",
      title: "PC Ports",
    },
    {
      slug: "other-products",
      title: "All Other Products",
    },
    {
      slug: "repairs",
      title: "Repairs",
    },
  ];

  let location = useLocation();
  let matches = useMatches();
  let crumbs = matches
    // first get rid of any matches that don't have handle and crumb
    .filter((match) => Boolean(match.handle?.crumb))
    // now map them into an array of elements, passing the loader
    // data to each one
    .map((match) => match?.handle.crumb(match.data));

  const [lastItem] = crumbs.slice(-1);

  const [meAuth] = useMeMutation();

  useEffect(() => {
    const verifyToken = async (token: string) => {
      try {
        await meAuth({ token: token })
          .unwrap()
          .then((res) => {
            if (res.success) {
              loginAuth(res);
            }
          });
      } catch (err) {
        console.log(err);
        localStorage?.setItem("token", "");
      }
    };
    if (localStorage.getItem("token")) {
      verifyToken(localStorage?.getItem("token"));
    }
  }, []);

  if (location.pathname.split("/")[1] === "admin") return <SideNavbar />;

  return (
    <>
      <FixedNavbar />
      <div className={classNames(styles.nav_color)}>
        <div className={classNames(styles.nav_container)}>
          <Link to="/" className={classNames(styles.py5)}>
            <img src={logo} />
          </Link>
          <div className={classNames(styles.flex, styles.flex_1)}>
            <div className={classNames(styles.flex, styles.menu_links)}>
              {menus.map((item, index) => (
                <Link
                  to={`/${item.slug}`}
                  className={classNames(styles.text_black, styles.text_link)}
                  key={index.toString()}
                >
                  {item.title}
                </Link>
              ))}
              <Link to="deals" className={classNames(styles.deal_link)}>
                Our Deals
              </Link>
            </div>
            <div className={classNames(styles.flex)}>
              <Link
                to="deals"
                className={classNames(styles.text_black, styles.text_link)}
              >
                <FontAwesomeIcon icon={faSearch} />
              </Link>
              <Link
                to="deals"
                className={classNames(
                  styles.text_black,
                  styles.text_link,
                  styles.cart
                )}
              >
                <FontAwesomeIcon icon={faBagShopping} />
                <div className={classNames(styles.items_in_cart)}>4</div>
              </Link>
              <div className={classNames(styles.flex)}>
                {!token ? (
                  <NormalNavbar />
                ) : (
                  <AuthNavbar role={auth.data.role} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.crumbs}>
        {crumbs.length > 1 && (
          <div className={styles.crumbs_container}>
            {crumbs.map((item, index) => (
              <div className={styles.crumbs_items} key={index.toString()}>
                {item}
                {item !== lastItem && (
                  <FontAwesomeIcon icon={faChevronRight} size={"xs"} />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
