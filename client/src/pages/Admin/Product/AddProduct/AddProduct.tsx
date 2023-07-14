import Button from "../../../../components/Button/Button";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import Input from "../../../../components/Input/Input";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import ColorInput from "../../../../components/ColorInput/ColorInput";
import FileInput from "../../../../components/FileInput/FileInput";
import styles from "./AddProduct.module.css";

type Props = {};

const AddProduct = (props: Props) => {
  const imgRef = useRef(null);

  type Color = {
    color: string;
  };

  type Colors = Array<Color>;

  const [colors, setColors] = useState<Colors>([]);
  const [images, setImages] = useState([]);

  const handleAddColor = () => {
    const a: Colors = [...colors];

    a.push({ color: "#000000" });
    setColors(a);
  };

  console.log(images);

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
              if (Array.isArray(file)) {
                let a = [];
                for (let i = 0; i < file.length; i++) {
                  a.push({ image: file[i].imgUrl });
                }
                setImages([...images, ...a]);
              } else {
                setImages([...images, { image: file }]);
              }
            }}
          />
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {images.map((item, index) => (
              <div style={{ margin: 10 }}>
                <img
                  src={item?.image}
                  style={{
                    width: 200 / (images.length * 0.2),
                    height: 200 / (images.length * 0.2),
                    maxWidth: 200,
                    maxHeight: 200,
                  }}
                />
              </div>
            ))}
          </div>
          <Input title="Product Name" />
          <Input title="Product Description" />

          <div>
            <h2>Produt Specs</h2>
            {}
            <Input title="Product Specs" />
            <Input title="Product Specs Value" />

            <Button
              title="+ Add Specs"
              color="white"
              textColor="#000"
              border="1px solid #000"
            />
          </div>

          <div>
            <h2>Produt Details</h2>
            {}
            <Input title="Product Details" />
            <Button
              title="+ Add Specs"
              color="white"
              textColor="#000"
              border="1px solid #000"
            />
          </div>

          <div>
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
            <Dropdown title="Series" />
          </div>

          <div>
            <h2>Product Category</h2>
            <Dropdown title="Categories" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AddProduct;
