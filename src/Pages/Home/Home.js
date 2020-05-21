import React from "react";
import { Link } from "react-router-dom";

// Images
import CatanOG from "../../assets/Catan.png";
import CatanCK from "../../assets/Cities.png";
import CatanS from "../../assets/Seafarer.png";
import PuertoRico from "../../assets/PR.png";
import CatanB from "../../assets/CatanBackground.jpeg";

// Styles
import { HomeContainer, GameImage, BackgroundImage } from "./Home.styles";

const Home = () => {
  return (
    <>
      <BackgroundImage src={CatanB} alt="" />
      <HomeContainer>
        <Link to="/catan">
          <GameImage style={{ background: "wheat" }} src={CatanOG} alt="" />
        </Link>
        <Link to="/citiesandknights">
          <GameImage
            style={{ background: "darkseagreen" }}
            src={CatanCK}
            alt=""
          />
        </Link>
        <Link to="/seafarers">
          <GameImage style={{ background: "darkcyan" }} src={CatanS} alt="" />
        </Link>
        <Link to="/puertorico">
          <GameImage
            style={{ background: "burlywood" }}
            src={PuertoRico}
            alt=""
          />
        </Link>
      </HomeContainer>
    </>
  );
};

export default Home;
