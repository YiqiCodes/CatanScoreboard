import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>Scoreboard</div>
      <div>Please select a game</div>
      <Link to="/catan">
        <button style={{ color: "white" }}>Settlers of Catan</button>
      </Link>
      <Link to="/citiesandknights">
        <button style={{ color: "white" }}>
          Settlers of Catan : Cities & Knights
        </button>
      </Link>
      <Link to="/seafarers">
        <button style={{ color: "white" }}>
          Settlers of Catan : Seafarers
        </button>
      </Link>
      <Link to="/puertorico">
        <button style={{ color: "white" }}>Puerto Rico</button>
      </Link>
    </>
  );
};

export default Home;
