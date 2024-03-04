import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styles from "./Product.module.css";

import { Link, useParams } from "react-router-dom";
import paypalIcon from "../../assets/images/paypal.png";
import { useGetProductMutation } from "../../store/services/productApi";

type Props = {};

export default function Product({}: Props) {
  const [selected, setSelected] = useState(1);
  const [active, setActive] = useState("#4B4D4F");

  const { slug } = useParams();

  const [getProduct] = useGetProductMutation();

  const handleGetProduct = async () => {
    try {
      await getProduct({ params: slug || "not-found" })
        .unwrap()
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    void handleGetProduct();
  }, []);

  const menus = [
    {
      name: "About Product",
      id: 1,
    },
    {
      name: "Details",
      id: 2,
    },
    {
      name: "Specs",
      id: 3,
    },
  ];

  const colors = [
    {
      color: "#4B4D4F",
    },
    {
      color: "#F2E9DC",
    },
    {
      color: "#EAE8EB",
    },
  ];

  return (
    <div>
      <div className={styles.detailNavBar}>
        <div className={styles.container}>
          <div className={styles.navMenu}>
            {menus.map((item, index) => (
              <div key={index.toString()} onClick={() => setSelected(item?.id)}>
                <p
                  style={{
                    borderBottom:
                      selected === item?.id ? "2px solid #0156FF" : "none",
                    fontSize: 14,
                    color: selected === item?.id ? "#000" : "#666666",
                    fontFamily: "Poppins-SemiBold",
                  }}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className={styles.sale}>
            <p>On Sale from </p>
            <span>$3000</span>
            <div className={styles.productItem}>
              <p>1</p>
              <div className={styles.add}>
                <button className={styles?.arrowBtn}>
                  <FontAwesomeIcon icon={faChevronUp} size="xs" />
                </button>
                <button className={styles?.arrowBtn}>
                  <FontAwesomeIcon icon={faChevronDown} size="xs" />
                </button>
              </div>
            </div>
            <div className={styles.btns}>
              <button className={styles.AddToCartBtn}>
                <p>Add to Cart</p>
              </button>

              <button className={styles.PayPalBtn}>
                <img
                  src={paypalIcon}
                  style={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1:1",
                    objectFit: "contain",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.details}>
        <div className={styles.detailsData}>
          <div>
            <div className={styles.breadcrum}>
              <Link to={"/"}>
                <p>Home</p>
              </Link>
              <p>{">"}</p>
              <Link to={"/laptops"}>
                <p>Laptops</p>
              </Link>
              <p>{">"}</p>
              <Link to={"/MSI-WS-Series"}>
                <p className={styles.breadcrum_series}>MSI WS Series</p>
              </Link>
            </div>

            <div>
              <h1 className={styles.title}>MSI MPG Trident 3</h1>
            </div>
            <div>
              <p className={styles.reviewfirst}>
                Be the first to review this product
              </p>
            </div>
            <div className={styles.productDetails}>
              <p>
                MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB
                RAM, 512GB SSD, 2TB HDD, Windows 10 Home, Gaming Keyboard and
                Mouse 3 Years Warranty Gaming Desktop
              </p>
            </div>
            <div className={styles.prductColors}>
              {colors.map((item, index) => (
                <div
                  style={{
                    borderRadius: 99999,
                    border:
                      item.color === active
                        ? "1px solid #0156FF"
                        : "1px solid #fff",
                    padding: 5,
                    cursor: "pointer",
                    transition: "ease-in-out",
                  }}
                  key={index.toString()}
                  onClick={() => setActive(item?.color)}
                >
                  <div
                    style={{
                      borderRadius: 99999,
                      border: "1px solid #efefef",
                      boxShadow: "0px 0px 4px 0px rgba(0,0,0,0.4)",
                      width: 30,
                      height: 30,
                      backgroundColor: item?.color,
                    }}
                  ></div>
                </div>
              ))}
            </div>
            <div className={styles.productQA}>
              <div>
                <p>
                  <span>Have a Question? </span>
                  <span className={styles?.contactBtn}> Contact Us</span>
                </p>
              </div>
              <div className={styles.productModel}>
                <p>SKU D5515AI</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.productImageData}>
          <p>HHHH</p>
        </div>
      </div>
    </div>
  );
}
