import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Rebel from "../../img/rebel.jpeg";

const CardStarships = (props) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={Rebel} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link to={`/planets/${props.uid}`} className="btn btn-outline-dark">
            Learn More!
          </Link>
          <button className="btn btn-outline-warning" id="heart">
            <i className="fa-solid fa-heart text-outline-warning"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default CardStarships;
