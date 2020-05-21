import React from "react";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
} from "./HeaderBar.styles.js";

const HeaderBarSea = () => {
  return (
    <HeaderContainerDiv>
      <TitleDiv>Seafarers</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <p>Players</p>
          <p>Dylan</p>
          <p>Mickias</p>
          <p>Rob</p>
          <p>Yiqi</p>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <p>Total Wins</p>
          <p>1</p>
          <p>0</p>
          <p>0</p>
          <p>0</p>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarSea;
