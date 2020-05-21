import React from "react";
import { Link } from "react-router-dom";

// Components
import HeaderBarCK from "../../Components/HeaderBar/HBCK";

// Styles
import { OutterGameContainerDiv, GoBackButton } from "./Games.styles";

const CitiesAndKnights = () => {
  return (
    <>
      <OutterGameContainerDiv>
        <HeaderBarCK></HeaderBarCK>
        <Link to="/">
          <GoBackButton style={{ marginTop: "1rem" }}> Go Back</GoBackButton>
        </Link>
      </OutterGameContainerDiv>
    </>
  );
};

export default CitiesAndKnights;
