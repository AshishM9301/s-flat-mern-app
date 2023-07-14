import React, { useState } from "react";


interface DropDownMenu{
    menuTitle:string;
}
interface Props { 
    title: string;
    menus:DropDownMenus 
}
const defaultProps: Props = {
  title: "Dropdown",
  menus:[{menuTitle:'Menu 1'}]
};



const Dropdown = (props: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="dropdown">
      <button onClick={handleOpen}>{props.title}</button>
      {open ? (
        <ul className="menu">
         {props.menus.map((item,index)=> {
            return(<li className="menu-item" key={item.menuTitle.toString()+index}>
                    <button>{item.menuTitle}</button>
                </li>)})
          }
        </ul>
      ) : null}
    </div>
  );
};

Dropdown.defaultProps = defaultProps;

export default Dropdown;
export interface DropDownMenus extends Array <DropDownMenu>;