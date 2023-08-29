import React from "react";

import styles from "./CategoryCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faStar,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  useAddToFavouriteCategoryMutation,
  useRemoveToFavouriteCategoryMutation,
} from "../../store/services/productApi";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import classNames from "classnames";

type Props = {
  id: string;
  views: number;
  favorites: boolean;
  admin: boolean;
  imgUrl: string;
  categoryName: string;

  onDelete?: ({ id }) => void;
};

let notAvaliable =
  "https://images.unsplash.com/photo-1682685795463-0674c065f315?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80";

const CategoryCard = (props: Props) => {
  const [addToFavouriteApi] = useAddToFavouriteCategoryMutation();
  const [remvoeFromFavouriteApi] = useRemoveToFavouriteCategoryMutation();

  const addToFavourite = async () => {
    try {
      await addToFavouriteApi({ params: props.id })
        .unwrap()
        .then((res) => {
          if (res.success) {
            console.log(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const remvoeFromFavourite = async () => {
    try {
      await remvoeFromFavouriteApi({ params: props.id })
        .unwrap()
        .then((res) => {
          if (res.success) {
            console.log(res);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {props.favorites && (
        <div className={styles.favourite}>
          <FontAwesomeIcon icon={faStar} color="rgba(255,255,255,0.8)" />
        </div>
      )}

      <div className={styles.category_img}>
        <img src={props.imgUrl ? props.imgUrl : notAvaliable} alt="" />
      </div>
      <div className={styles.category_name}>
        <h5>{props.categoryName}</h5>
      </div>
      <div className={styles.category_options}>
        <div className={styles.category_option_view} title="View">
          <FontAwesomeIcon icon={faEye} />
        </div>
        <div
          className={classNames(
            styles.category_option_favourite,
            props.favorites && styles.selected
          )}
          title="Add to Favourite"
          onClick={() =>
            props.favorites ? remvoeFromFavourite() : addToFavourite()
          }
        >
          <FontAwesomeIcon icon={faStar} />
        </div>
        {props.admin && (
          <div
            className={styles.category_option_delete}
            title="Delete"
            onClick={() => props.onDelete({ id: props.id })}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
