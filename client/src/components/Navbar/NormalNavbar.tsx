import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const NormalNavbar = (props: Props) => {
  return (
    <>
      <Link to="/login" className="mr-4 text-gray-100 hover:text-gray-300">
        Login
      </Link>
      <Link to="/signup" className="mr-4 text-gray-100 hover:text-gray-300">
        Register
      </Link>
    </>
  );
};

export default NormalNavbar;
