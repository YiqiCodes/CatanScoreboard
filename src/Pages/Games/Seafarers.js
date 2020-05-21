import React from "react";
import { Link } from "react-router-dom";

// Components
import HeaderBarSea from "../../Components/HeaderBar/HBSea";

// Styles
import { OutterGameContainerDiv, GoBackButton } from "./Games.styles";

const Seafarers = () => {
  return (
    <>
      <OutterGameContainerDiv>
        <HeaderBarSea></HeaderBarSea>
        <Link to="/">
          <GoBackButton style={{ marginTop: "1rem" }}> Go Back</GoBackButton>
        </Link>
      </OutterGameContainerDiv>
    </>
  );
};

export default Seafarers;
