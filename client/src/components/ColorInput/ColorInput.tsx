import { useRef, useState } from "react";
import styles from "./ColorInput.module.css";

type Props = { initalColor: string; onColorChange?: (e) => void };

const defaultProps: Props = {
  initalColor: "#000",
  onColorChange: () => {},
};

const ColorInput = (props: Props) => {
  const buttonRef = useRef(null);
  const [initialColor, setInitialColor] = useState(props.initalColor);

  const handleColorChange = () => {
    console.log("Clicked");

    buttonRef.current.click();
  };

  return (
    <div className={styles.button_color_container}>
      <div
        className={styles.button_color}
        style={{ backgroundColor: props.initalColor, cursor: "pointer" }}
        onClick={() => handleColorChange()}
      ></div>
      <input
        type="color"
        id="color"
        name="color"
        value={initialColor}
        className={styles.input_color}
        ref={buttonRef}
        onChange={(e) => {
          setInitialColor(e.target.value);
          props?.onColorChange(e.target.value);
        }}
      />
    </div>
  );
};

ColorInput.defaultProps = defaultProps;

export default ColorInput;
