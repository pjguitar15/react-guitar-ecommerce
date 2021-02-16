import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="text-xl-start mb-3">
        <Link to="/">
          <a href="./Home.jsx" className="col-sm-12 mx-5 logo">
            Philcob Guitar Shop
          </a>
        </Link>
      </div>
      <div className="Icons text-center">
        <a href="#" className="mx-5">
          GEAR
        </a>
        <a href="#" className="mx-5">
          CUSTOM
        </a>
        <Link to="/cart">
          <a href="./Cart.jsx" className="mx-5">
            CART
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
