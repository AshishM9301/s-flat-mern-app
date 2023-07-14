import { useRef, useState } from "react";
import styles from "./FileInput.module.css";

type Props = {
  title: string;
  onChange?: (e) => void;
};

const defaultProps: Props = {
  title: "Add",
};

const FileInput = (props: Props) => {
  const [file, setFile] = useState(null);

  const fileRef = useRef(null);

  const handleFileInput = () => {
    fileRef.current.click();
  };

  return (
    <div>
      <button onClick={handleFileInput}>{props.title}</button>
      <input
        type="file"
        className={styles.input_files}
        ref={fileRef}
        onChange={(e) => {
          setFile(e.target.files);
          props.onChange(e.target.files);
        }}
      />
    </div>
  );
};

FileInput.defaultProps = defaultProps;

export default FileInput;
