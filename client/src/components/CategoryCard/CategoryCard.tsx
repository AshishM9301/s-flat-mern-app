import React from "react";

import styles from "./CategoryCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faStar,
  faTrash,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

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
          className={styles.category_option_favourite}
          title="Add to Favourite"
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
