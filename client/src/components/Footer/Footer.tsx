import classNames from "classnames";
import { useLocation } from "react-router-dom";
import CompanySupport from "../CompanySupport/CompanySupport";
import styles from "./Footer.module.css";
import { AllLinks } from "./FooterData";

const Footer = () => {
  const nav = useLocation();

  if (location.pathname.split("/")[1] !== "admin")
    return (
      <div>
        <div>
          <CompanySupport bgColor={nav.pathname !== "/" ? "#F5F7FF" : "#fff"} />
        </div>

        <div className={styles.bgColor}>
          <div className={styles.footerContainer}>
            <div className={styles.footerFirstSection}>
              <div className={styles.titleContainer}>
                <div className={styles.titleText}>
                  <p>Sign Up To Our Newsletter.</p>
                </div>
                <div className={styles.titleDescText}>
                  <p>Be the first to hear about the latest offers.</p>
                </div>
              </div>

              <div className={styles.inputContainer}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Email"
                    className={styles.input}
                  />
                </div>
                <div>
                  <button className={styles.button}>
                    <p>subscribe</p>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.footerLinkSection}>
              {AllLinks.map((linkTitles, linkIndex) => (
                <div
                  className={classNames(
                    styles[`${linkTitles.linkName}`],
                    styles.links
                  )}
                  key={linkIndex.toString()}
                >
                  <div className={styles.linkName}>
                    <p>{linkTitles.name}</p>
                  </div>
                  <div className={styles.linksContainer}>
                    {linkTitles.links.map((item, index) => (
                      <div
                        key={index.toString() + item.name}
                        className={classNames(styles.links)}
                        style={{ cursor: item?.link ? "pointer" : "auto" }}
                      >
                        <p>{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
