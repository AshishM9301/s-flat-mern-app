import { useRef, useState } from "react";
import styles from "./FileInput.module.css";

type Props = {
  title: string;
  multiple: boolean;
  onChange?: (e) => void;
  img?: (e) => void;
};

const defaultProps: Props = {
  title: "Add",
  multiple: true,
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
        multiple={props.multiple}
        onChange={(e) => {
          console.log(e.target.files, ">>>>Files");

          function get_extenstion(file) {
            return file.name.split(".")[1];
          }

          // setFile(e.target.files);
          let object_url = null,
            div = null,
            extension = null;
          let img = [];

          props.onChange(e.target.files);
          for (const i in e.target.files) {
            if (e.target.files[i] instanceof File) {
              extension = get_extenstion(e.target.files[i]);

              object_url = URL.createObjectURL(e.target.files[i]);

              img.push({ imgUrl: object_url });
            }
          }
          props.img(img);
          fileRef.current.value = null;
        }}
      />
    </div>
  );
};

FileInput.defaultProps = defaultProps;

export default FileInput;
