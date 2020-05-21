import React from "react";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
} from "./HeaderBar.styles.js";

const HeaderBarCK = () => {
  return (
    <HeaderContainerDiv>
      <TitleDiv>Cities & Knights</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <p>Players</p>
          <p>Dylan</p>
          <p>Yiqi</p>
          <p>Mickias</p>
          <p>Rob</p>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <p>Total Wins</p>
          <p>2</p>
          <p>1</p>
          <p>0</p>
          <p>0</p>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarCK;
