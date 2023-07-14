import React, { useEffect } from "react";

import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import AuthNavbar from "./AuthNavbar";
import NormalNavbar from "./NormalNavbar";

const Navbar = () => {
  const { token } = useAuth();

  return (
    <div className="bg-gray-700 px-3 py-4 text-right font-medium ">
      <Link to="/" className="mr-4 text-gray-100 hover:text-gray-300">
        Home
      </Link>

      {!token ? <NormalNavbar /> : <AuthNavbar />}
    </div>
  );
};

export default Navbar;
