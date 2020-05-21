import React from "react";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
  SeasonWinsDiv,
} from "./HeaderBar.styles.js";

const HeaderBar = () => {
  return (
    <HeaderContainerDiv>
      <TitleDiv>Catan</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <p>Players</p>
          <p>Yiqi</p>
          <p>Mickias</p>
          <p>Rob</p>
          <p>Dylan</p>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <p>Total Wins</p>
          <p>59</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </TotalWinsDiv>
        <SeasonWinsDiv>
          <p>Season Two</p>
          <p>59</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </SeasonWinsDiv>
        <SeasonWinsDiv>
          <p>Season One</p>
          <p>59</p>
          <p>20</p>
          <p>10</p>
          <p>0</p>
        </SeasonWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
