import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import Swl from "../../img/swl.jpg";
import Galaxy from "../../img/galaxy.jpg";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark">
      <div className="container">
        <Link to="/">
          <img className="logo" src={Swl} alt="star wars logo" />
        </Link>
        <img className="galaxy" src={Galaxy} alt="star wars galaxy" />
      </div>
      <div>
        <div className="nav-item dropdown btn btn-warning">
          <div
            className="nav-link dropdown-toggle"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </div>
          <ul
            className="dropdown-menu list-unstyled"
            aria-labelledby="navbarDropdown"
          >
            {store.favoritos && store.favoritos.length > 0 ? (
              <>
                {store.favoritos.map((item, index) => {
                  return (
                    <Link key={index} to={item.link}>
                      <li className="text-center">{item.name}</li>
                      <button className="btn btn-danger">
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </Link>
                  );
                })}
              </>
            ) : (
              <>empty</>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
