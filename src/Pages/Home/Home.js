import React from "react";
import { Link } from "react-router-dom";

// Images
import CatanOG from "../../assets/Catan.png";
import CatanCK from "../../assets/Cities.png";
import CatanS from "../../assets/Seafarer.png";
import PuertoRico from "../../assets/PR.png";

// Styles
import { HomeContainer, GameImage } from "./Home.styles";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <h2>Scoreboard</h2>
        <Link to="/catan">
          <GameImage src={CatanOG} alt="" />
        </Link>
        <Link to="/citiesandknights">
          <GameImage src={CatanCK} alt="" />
        </Link>
        <Link to="/seafarers">
          <GameImage src={CatanS} alt="" />
        </Link>
        <Link to="/puertorico">
          <GameImage src={PuertoRico} alt="" />
        </Link>
      </HomeContainer>
    </>
  );
};

export default Home;
