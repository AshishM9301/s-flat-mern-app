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
        multiple
        onChange={(e) => {
          let images;
          if (e.target.files?.length > 2) {
            let a = [];
            for (let i = 0; i < e.target.files.length; i++) {
              let url = URL.createObjectURL(e.target.files[i]);
              a.push({ imgUrl: url });
            }

            images = a;
          } else {
            images = URL.createObjectURL(e.target.files[0]);
          }
          setFile(images);

          props.onChange(images);
        }}
      />
    </div>
  );
};

FileInput.defaultProps = defaultProps;

export default FileInput;
