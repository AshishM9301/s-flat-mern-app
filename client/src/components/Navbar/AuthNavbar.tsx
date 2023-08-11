import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import { useAuth } from "../../hooks/useAuth";

type Props = { role: string };

const AuthNavbar = (props: Props) => {
  const [options, setOptions] = useState(false);
  const { logout } = useAuth();

  const navigate = useNavigate();
  return (
    <div className={styles.avatar_container}>
      <button
        className={styles.avatar_button}
        onClick={() => setOptions(!options)}
      >
        <img
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className={styles.avatar_logo_img}
        />
      </button>
      {options && (
        <div className={styles.option_menus}>
          <Button
            title="Profile"
            color={"transparent"}
            textColor={"#fff"}
            onCLick={() => setOptions(false)}
          />
          {props.role === "Admin" && (
            <Button
              title="Dashboard"
              color={"transparent"}
              textColor={"#fff"}
              onCLick={() => {
                setOptions(false);
                navigate("/admin/home");
              }}
            />
          )}
          <Button
            title="Logout"
            color={"transparent"}
            textColor={"#fff"}
            onCLick={() => {
              logout();
              setOptions(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default AuthNavbar;

{
  /* <>
      <Link
        to="/admin/add-product"
        className="mr-4 text-gray-100 hover:text-gray-300"
      >
        Add Product
      </Link>
      <Link
        to="/admin/add-category"
        className="mr-4 text-gray-100 hover:text-gray-300"
      >
        Add Category
      </Link>
      <Link
        to="/admin/add-series"
        className="mr-4 text-gray-100 hover:text-gray-300"
      >
        Add Series
      </Link>
    </> */
}
