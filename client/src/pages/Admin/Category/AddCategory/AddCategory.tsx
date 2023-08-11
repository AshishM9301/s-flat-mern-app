import React, { useState } from "react";
import styles from "./AddCategory.module.css";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import { useAddCategoryMutation } from "../../../../store/services/adminApi";
import { AddCategoryResposneBody } from "../../../../store/types";
import Modal from "../../../../components/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const AddCategory = (props: Props) => {
  const [categoryName, setCategoryName] = useState("");
  const [open, setOpen] = useState(false);

  const [addCategory] = useAddCategoryMutation();

  const handleAddCategory = async () => {
    try {
      await addCategory({ body: { name: categoryName } }).then((res) => {
        setOpen(true);
        setCategoryName("");
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Add Category</h1>
        <div className={styles.d_card_container}>
          <div className={styles.d_card}>
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
