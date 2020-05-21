import React from "react";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
} from "./HeaderBar.styles.js";

const HeaderBarPR = () => {
  return (
    <HeaderContainerDiv>
      <TitleDiv>Puerto Rico</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <p>Players</p>
          <p>Mickias</p>
          <p>Rob</p>
          <p>Yiqi</p>
          <p>Dylan</p>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <p>Total Wins</p>
          <p>1</p>
          <p>1</p>
          <p>1</p>
          <p>0</p>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarPR;
