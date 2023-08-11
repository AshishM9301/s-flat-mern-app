import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

type Props = {
  setOpen: () => void;
  icon: any;
  title: string;
  content: any;
  action?: boolean;
  auto: boolean;
};

const defaultProps: Props = {
  setOpen: function (): void {},
  icon: false,
  title: "",
  content: "",
  action: false,
  auto: false,
};

const Modal = (props: Props) => {
  useEffect(() => {
    if (props.auto) {
      console.log("rung");
      setTimeout(() => {
        console.log("rung");
        props.setOpen(false);
      }, 2000);
    }
  }, []);

  return (
    <>
      <div className={styles.darkBG} onClick={() => props.setOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modal_header}>
            <div className={styles.icon}> {props?.icon && props.icon}</div>
            <div className={styles.title}> {props?.title && props.title}</div>
          </div>
          {!props.auto && (
            <button
              className={styles.closeBtn}
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <FontAwesomeIcon icon={faX} style={{ marginBottom: "-3px" }} />
            </button>
          )}
          <div className={styles.modalContent}>{props.content}</div>
          {props.action && (
            <div className={styles.modalActions}>
              <div className={styles.actionsContainer}>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    props.setOpen(false);
                  }}
                >
                  Delete
                </button>
                <button
                  className={styles.cancelBtn}
                  onClick={() => {
                    props.setOpen(false);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
