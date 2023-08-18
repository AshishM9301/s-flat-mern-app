import {
  faCheckCircle,
  faPlus,
  faStar,
  faTrash,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

import Button from "../../../../components/Button/Button";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Input from "../../../../components/Input/Input";
import ColorInput from "../../../../components/ColorInput/ColorInput";
import FileInput from "../../../../components/FileInput/FileInput";
import styles from "./AddProduct.module.css";
import ImageSlider from "../../../../components/ImageSlider/ImageSlider";
import Rating from "react-rating";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import {
  useAddProductMutation,
  useAllCategoryMutation,
  useAllSeriesMutation,
} from "../../../../store/services/adminApi";

type Props = {};

const AddProduct = (props: Props) => {
  const imgRef = useRef(null);

  type Color = {
    color: string;
  };

  type Colors = Array<Color>;

  const [colors, setColors] = useState<Colors>([]);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState([]);

  const [inStock, setInStock] = useState("0");
  const [rating, setRating] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productSpec, setProductSpec] = useState({
    title: "",
    value: "",
  });
  const [productSpecs, setProductSpecs] = useState([]);
  const [prouctDetail, setProuctDetail] = useState({ title: "" });
  const [productDetails, setProductDetails] = useState([]);
  const [price, setPrice] = useState("");
  const [offerprice, setOfferprice] = useState("");
  const [productSeries, serProductSeries] = useState("dsa");
  const [productCategory, serProductCategory] = useState("sadasd");
  const [productCategories, setProductCategories] = useState([]);
  const [productSeriess, setProductSeriess] = useState([]);

  const [allCategory] = useAllCategoryMutation();
  const [allSeries] = useAllSeriesMutation();
  const [addProduct] = useAddProductMutation();

  // console.log(showImages, ">>>>show");

  const handleAddColor = () => {
    const a: Colors = [...colors];

    a.push({ color: "#000000" });
    setColors(a);
  };

  // console.log(images);

  const deleteImage = (item) => {
    let a = [...images];

    setImages(
      a.filter((img) => {
        return img !== item;
      })
    );
  };

  console.log(productDetails);

  const deleteSpec = (item) => {
    let a = [...productSpecs];

    setProductSpecs(
      a.filter((i) => {
        return i !== item;
      })
    );
  };

  const deleteDetails = (item) => {
    let a = [...productDetails];

    setProductDetails(
      a.filter((i) => {
        return i !== item;
      })
    );
  };

  const showSubmit = () => {
    if (
      productName &&
      productDescription &&
      colors.length > 0 &&
      productSeries &&
      productCategory &&
      price
    ) {
      return true;
    } else {
      return false;
    }
  };

  // const fData = () => {

  //   const fd = new FormData();

  //   console.log(images);

  //   Object.entries(body).forEach(([key, value]) => {
  //     fd.append(key, value);
  //   });

  //   if (images) {
  //     for (let i = 0; i < images.length; i++) {
  //       fd.append(`images`, images[i]);
  //     }
  //   }
  //   return fd;
  // };

  const handleSubmit = async () => {
    try {
      let body = {
        colors: JSON.stringify(colors),
        inStock,
        rating,

        productDetails: JSON.stringify(productDetails),
        price,
        offerPrice: offerprice,
        categoryId: productCategory,

        seriesId: productSeries,

        name: productName,

        productDesc: productDescription,
        // productCode,

        specs: JSON.stringify(productSpecs),
      };

      console.log("specs-=--->", productSpecs);

      let fd = new FormData();

      console.log(images[0]);

      for (const i in body) {
        fd.append(i, body[i]);
      }
      if (images) {
        for (let i = 0; i < images.length; i++) {
          fd.append(`images`, images[i].image);
        }
      }

      for (var [key, value] of fd.entries()) {
        console.log(key, value);
      }
      await addProduct({ body: fd }).then((res) => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCategories = async () => {
    try {
      await allCategory({}).then((res) => {
        if (res.data.success) {
          console.log(res);
          let a = [];
          for (let i = 0; i < res.data.data.length; i++) {
            a.push({
              menuTitle: res.data.data[i].name,
              onClick: () => {
                serProductCategory(res.data.data[i]._id);
              },
            });
          }
          setProductCategories(a);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const getAllSeries = async () => {
    try {
      await allSeries({}).then((res) => {
        if (res.data.success) {
          console.log(res);
          let a = [];
          for (let i = 0; i < res.data.data.length; i++) {
            a.push({
              menuTitle: res.data.data[i].name,
              onClick: () => {
                serProductSeries(res.data.data[i]._id);
              },
            });
          }
          setProductSeriess(a);
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleFileChange = async (file) => {
    console.log(file, "File");
    if (file.length !== 0) {
      let a = [];
      let b = [];
      let img = "";

      const reader = new FileReader();
      for (const i in file) {
        if (file[i] instanceof File) {
          a.push({ image: file[i] });
        }
        // b.push({ imgUrl: img });
      }

      console.log(a, "asdasd");

      setImages([...images, ...a]);
      // setShowImages([...showImages, ...b]);
    }
  };

  useEffect(() => {
    getAllCategories();
    getAllSeries();
  }, []);

  return (
    <div>
      <div>
        <div>
          <h1>Add Product</h1>
        </div>
      </div>
      <div className={styles.d_product}>
        <div className={styles.product_data}>
          <FileInput
            title="Add Image"
            onChange={(file) => {
              handleFileChange(file);
            }}
            img={(fs) => {
              // setImages([...images, ...a]);
              console.log(fs, ">>>>>>>FS");
              setShowImages([...showImages, ...fs]);
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {showImages.map((item, index) => (
              <div
                style={{ margin: 10, position: "relative" }}
                key={index.toString()}
              >
                <img
                  src={item.imgUrl}
                  style={{
                    width: 200 / (images.length * 0.2),
                    height: 200 / (images.length * 0.2),
                    maxWidth: 200,
                    maxHeight: 200,
                  }}
                />
                <button
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #000",
                    borderRadius: 9999,
                    width: 40,
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: -13,
                    right: -13,
                  }}
                  onClick={() => {
                    deleteImage(item);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faX}
                    color="#000"
                    style={{ margin: 0 }}
                  />
                </button>
              </div>
            ))}
          </div>
          <Input
            title="Product Name"
            placeholder="Name of the Product"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <Input
            title="Product Description"
            placeholder="Description of the Product"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />

          <Input
            title="Product Quantity"
            placeholder="Quantity of the Product"
            value={inStock}
            onChange={(e) => setInStock(e.target.value)}
          />

          <div className={styles.productSpecContainer}>
            <h2>Produt Specs</h2>
            {productSpecs.length > 0 && (
              <div className={styles.product_specs}>
                {productSpecs.map((item, index) => (
                  <>
                    <div className={styles.product_spec} key={index.toString()}>
                      <h4>{item?.title}</h4>
                      <p>{item?.value}</p>
                      <button
                        className={styles.button_specs}
                        onClick={() => {
                          deleteSpec(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faX} color="#000" />
                      </button>
                    </div>
                  </>
                ))}
              </div>
            )}
            <Input
              title="Product Specs"
              placeholder="Specs Name of the Product"
              value={productSpec.title}
              onChange={(e) =>
                setProductSpec({ ...productSpec, title: e.target.value })
              }
            />
            <Input
              title="Product Specs Value"
              placeholder="Specs Value of the Product"
              value={productSpec.value}
              onChange={(e) =>
                setProductSpec({ ...productSpec, value: e.target.value })
              }
            />

            <Button
              title="+ Add Specs"
              color="white"
              textColor="#000"
              border="1px solid #000"
              onCLick={() => {
                let a = [...productSpecs];
                if (
                  productSpec.title.length > 0 &&
                  productSpec.value.length > 0
                ) {
                  a.push(productSpec);
                  setProductSpec({ title: "", value: "" });
                  setProductSpecs(a);
                }
              }}
            />
          </div>

          <div className={styles.productDetailsContainer}>
            <h2>Produt Details</h2>
            {productDetails.length > 0 && (
              <div className={styles.product_specs}>
                {productDetails.map((item, index) => (
                  <>
                    <ul className={styles.product_spec} key={index.toString()}>
                      <li>{item.title}</li>
                      <button
                        className={styles.button_detail}
                        onClick={() => {
                          deleteDetails(item);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} color="#000" />
                      </button>
                    </ul>
                  </>
                ))}
              </div>
            )}
            <Input
              title="Product Details"
              placeholder="Details of Product"
              value={prouctDetail.title}
              onChange={(e) => setProuctDetail({ title: e.target.value })}
            />
            <Button
              title="+ Add Details"
              color="white"
              textColor="#000"
              border="1px solid #000"
              onCLick={() => {
                let a: Array<string> = [...productDetails];
                if (prouctDetail.title.length > 0) {
                  a.push(prouctDetail);
                  setProuctDetail({ title: "" });
                  setProductDetails(a);
                }
              }}
            />
          </div>

          <div className={styles.productColorContainer}>
            <h2>Product Color</h2>
            <div className={styles.colors_container}>
              {colors?.map((item, index) => (
                <ColorInput
                  initalColor={item.color}
                  key={item.color + index.toString()}
                />
              ))}
              <button
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid #000",
                  width: 50,
                  height: 50,
                }}
                onClick={handleAddColor}
              >
                <FontAwesomeIcon icon={faPlus} color="#000" />
              </button>
            </div>
          </div>

          <div className={styles.series}>
            <h2>Product Series</h2>
            <Dropdown title="Series" menus={productSeriess} />
          </div>

          <div className={styles.productCategoryContainer}>
            <h2>Product Category</h2>
            <Dropdown title="Categories" menus={productCategories} />
          </div>

          <div className={styles.productOfferPriceContainer}>
            <Input
              title="Offer Price"
              placeholder="Offer Price for the Product"
              value={offerprice}
              onChange={(e) => setOfferprice(e.target.value)}
            />
          </div>
          <div className={styles.productPriceContainer}>
            <Input
              title="Price"
              placeholder="Price for the Product"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <ProductCard
            inStock={inStock}
            images={showImages}
            rating={rating}
            productName={productName}
            productDescription={productDescription}
            offerprice={offerprice}
            price={price}
          />
          {/* {showSubmit() && ( */}
          <Button
            title="Submit"
            color={"#efefef"}
            textColor={"#000"}
            onCLick={() => {
              handleSubmit();
            }}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
