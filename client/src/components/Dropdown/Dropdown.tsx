import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./Dropdown.module.css";

interface DropDownMenu {
  menuTitle: string;
}
export type DropDownMenus = Array<DropDownMenu>;
interface Props {
  title: string;
  menus: DropDownMenus;
}
const defaultProps: Props = {
  title: "Dropdown",
  menus: [{ menuTitle: "Menu 1" }, { menuTitle: "Menu 2" }],
};

const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={handleOpen} className={styles.dropdown_button}>
        <p>{props.title}</p>
        <p>|</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      {open ? (
        <ul className={styles.menu}>
          {props.menus.map((item, index) => {
            return (
              <li className="menu-item" key={index}>
                <button>{item.menuTitle}</button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
