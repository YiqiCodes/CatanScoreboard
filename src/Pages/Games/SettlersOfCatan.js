import React from "react";

// Components
import HeaderBar from "../../Components/HeaderBar/HeaderBar";
import IndividualGames from "../../Components/IndividualGames/IndividualGames";

// Styles
import { OutterGameContainerDiv, ScrollableContainerDiv } from "./Games.styles";

const SettlersOfCatan = () => {
  return (
    <>
      <OutterGameContainerDiv style={{ justifyContent: "flex-end" }}>
        <HeaderBar></HeaderBar>
        <ScrollableContainerDiv>
          <IndividualGames />
        </ScrollableContainerDiv>
      </OutterGameContainerDiv>
    </>
  );
};

export default SettlersOfCatan;
