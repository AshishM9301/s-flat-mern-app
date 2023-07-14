import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const AuthNavbar = (props: Props) => {
  return (
    <>
      <Link to="/admin" className="mr-4 text-gray-100 hover:text-gray-300">
        Admin
      </Link>
    </>
  );
};

export default AuthNavbar;
