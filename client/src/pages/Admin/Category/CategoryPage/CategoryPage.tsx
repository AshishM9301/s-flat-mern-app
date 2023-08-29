import React, { useState, useEffect } from "react";
import CategoryCard from "../../../../components/CategoryCard/CategoryCard";
import styles from "./CategoryPage.module.css";
import {
  useCategoriesMutation,
  useDeleteCategoriesMutation,
} from "../../../../store/services/productApi";
import Confirmation from "../../../../components/Confirmation/Confirmation";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";

type Props = {};

const CategoryPage = (props: Props) => {
  const { _id } = useSelector((state: RootState) => state.auth.data);

  const [categories, setCategories] = useState([]);
  const [openConfirmation, setOpentConfirmation] = useState(false);
  const [categoryId, setCategoryId] = useState("");

  const [allCategoriesApi] = useCategoriesMutation();
  const [deleteCategoryApi] = useDeleteCategoriesMutation();

  const getAllCategories = async () => {
    try {
      await allCategoriesApi({})
        .unwrap()
        .then((res) => {
          if (res.success) {
            setCategories(res.data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCategory = async ({ id }) => {
    try {
      await deleteCategoryApi({ params: id })
        .unwrap()
        .then((res) => {
          if (res.success) {
            getAllCategories();
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <div className={styles.page_title}>
        <h1>Categories</h1>
      </div>
      <div className={styles.categories}>
        {categories.map((item, index) => {
          let fav = false;
          item.favourite.find((v) => {
            if (v == _id) {
              fav = true;
            } else {
              fav = false;
            }
          });

          return (
            <CategoryCard
              views={0}
              favorites={fav}
              admin={true}
              imgUrl={item.imgUrl}
              categoryName={item.name}
              key={index.toString()}
              onDelete={({ id }) => {
                setCategoryId(item._id);
                setOpentConfirmation(true);
              }}
              id={item._id}
            />
          );
        })}
      </div>
      {openConfirmation && (
        <Confirmation
          title={"Are you sure you want to Delete the Category?"}
          details={
            "Deleting the categoru will delete all the product in that category"
          }
          actionButton={() => {
            deleteCategory({ id: categoryId });
            setOpentConfirmation(false);
          }}
          closeUpButton={() => setOpentConfirmation(false)}
        />
      )}
    </div>
  );
};

export default CategoryPage;
