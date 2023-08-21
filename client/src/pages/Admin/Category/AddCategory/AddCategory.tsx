import React, { useState } from "react";
import styles from "./AddCategory.module.css";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useAddCategoryMutation } from "../../../../store/services/adminApi";
import { AddCategoryResposneBody } from "../../../../store/types";
import Modal from "../../../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faX } from "@fortawesome/free-solid-svg-icons";
import FileInput from "../../../../components/FileInput/FileInput";

type Props = {};

const AddCategory = (props: Props) => {
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState([]);

  const [addCategory] = useAddCategoryMutation();

  const handleAddCategory = async () => {
    try {
      let fd = new FormData();

      fd.append("name", categoryName);
      fd.append(`images`, images[0].image);

      await addCategory({ body: fd }).then((res) => {
        setOpen(true);
        setCategoryName("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteImage = (item) => {
    let a = [...images];

    setImages(
      a.filter((img) => {
        return img !== item;
      })
    );
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

  return (
    <div>
      <div className={styles.container}>
        <h1>Add Category</h1>
        <div className={styles.d_card_container}>
          <div className={styles.d_card}>
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
            <div>
              <Input
                title="Category Name"
                placeholder="Name of the Category"
                required
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className={styles.d_button}>
              <Button
                title={"Add Category"}
                color={""}
                textColor={""}
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onCLick={() => handleAddCategory()}
              />
            </div>
          </div>
          <div>
            {open && (
              <Modal
                icon={<FontAwesomeIcon icon={faCheckCircle} color="green" />}
                title="Success"
                content="Category Added Successfully"
                setOpen={setOpen}
                auto={true}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
