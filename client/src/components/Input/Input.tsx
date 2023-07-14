import { ChangeEvent, useEffect, useState } from "react";

import styles from "./Input.module.css";

type Props = {
  title: string;
  placeholder: string;
  value: string;
  required: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
};

const defaultProps: Props = {
  title: "Hello",
  placeholder: "hello",
  value: "",
  required: false,
  onChange: (e) => {},
};

const Input = (props: Props) => {
  const [value, setValue] = useState(props.value);

  const handleOnChange = (val: any) => {
    setValue(val?.target?.value);
    props?.onChange(val);
  };

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <div className={styles.container}>
      <div className={styles.title_text}>
        {props.title}{" "}
        {props.required ? <span className={styles.required}>*</span> : ""}
      </div>
      <div className={styles.inputContainer}>
        <input
          placeholder={props.placeholder}
          value={value}
          required={props.required}
          style={style.input}
          onChange={(e) => handleOnChange(e)}
        />
      </div>
    </div>
  );
};

Input.defaultProps = defaultProps;

export default Input;

let style = {
  input: {
    backgroundColor: "#fff",
    border: "1px solid #a2a6b0",
    borderRadius: "4px",
    width: "100%",
    padding: "10px 20px",
    fontSize: "14px",
    lineHeight: "20px",
    fontWeight: 300,
    outline: "none",
    marginTop: "8px",
    color: "#000",
    flex: "1 1 100%",
  },
};
