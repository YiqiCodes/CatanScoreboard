import React from "react";

// Components
import IndividualGames from "../../Components/IndividualGames/IndividualGames";

// Styles
import { OutterGameContainerDiv, ScrollableContainerDiv } from "./Games.styles";

const SettlersOfCatan = () => {
  return (
    <>
      <OutterGameContainerDiv style={{ justifyContent: "flex-end" }}>
        <ScrollableContainerDiv>
          <IndividualGames />
        </ScrollableContainerDiv>
      </OutterGameContainerDiv>
    </>
  );
};

export default SettlersOfCatan;
