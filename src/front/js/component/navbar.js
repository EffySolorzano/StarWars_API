import React from "react";
import { Link } from "react-router-dom";
import Swl from "../../img/swl.jpg";
import Galaxy from "../../img/galaxy.jpg";

export const Navbar = () => {
  //<a href="./demo.html">
  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <Link to="/">
          <img className="logo" src={Swl} alt="star wars logo" />
        </Link>
        <img className="galaxy" src={Galaxy} alt="star wars galaxy" />
        <div className="fav">
          <button className="btn btn-warning">Favorites</button>
        </div>
      </div>
    </nav>
  );
};
