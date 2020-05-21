import React from "react";
import { Link } from "react-router-dom";

// Components
import HeaderBar from "../../Components/HeaderBar/HeaderBar";
import IndividualGames from "../../Components/IndividualGames/IndividualGames";

// Styles
import {
  OutterGameContainerDiv,
  ScrollableContainerDiv,
  GoBackButton,
} from "./Games.styles";

const SettlersOfCatan = () => {
  return (
    <>
      <OutterGameContainerDiv style={{ justifyContent: "flex-end" }}>
        <HeaderBar></HeaderBar>
        <ScrollableContainerDiv>
          <IndividualGames />
        </ScrollableContainerDiv>
        <Link to="/">
          <GoBackButton> Go Back</GoBackButton>
        </Link>
      </OutterGameContainerDiv>
    </>
  );
};

export default SettlersOfCatan;
