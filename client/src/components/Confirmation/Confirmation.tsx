import React from "react";
import styles from "./Confirmation.module.css";
import Button from "../Button/Button";

type Props = {
  title: string;
  details?: string;
  actionButton: () => void;
  closeUpButton: () => void;
};

const Confirmation = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bg_over} onClick={() => props.closeUpButton()} />
      <div className={styles.confirmation_container}>
        <div className={styles.confirmation_title}>
          <h2>{props.title}</h2>
        </div>
        {props.details && (
          <div className={styles.confirmation_details}>
            <p>{props.details}</p>
          </div>
        )}
        <div className={styles.confirmation_buttons}>
          <Button
            title={"Yes"}
            color={""}
            textColor={""}
            onCLick={() => props.actionButton()}
          />
          <Button
            title={"No"}
            color={""}
            textColor={""}
            onCLick={() => props.closeUpButton()}
          />
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
