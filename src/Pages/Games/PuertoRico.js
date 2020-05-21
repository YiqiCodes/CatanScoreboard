import React from "react";
import { Link } from "react-router-dom";

// Components
import HeaderBarPR from "../../Components/HeaderBar/HBPR";

// Styles
import { OutterGameContainerDiv, GoBackButton } from "./Games.styles";

const PuertoRico = () => {
  return (
    <>
      <OutterGameContainerDiv>
        <HeaderBarPR></HeaderBarPR>
        <Link to="/">
          <GoBackButton style={{ marginTop: "1rem" }}> Go Back</GoBackButton>
        </Link>
      </OutterGameContainerDiv>
    </>
  );
};

export default PuertoRico;
