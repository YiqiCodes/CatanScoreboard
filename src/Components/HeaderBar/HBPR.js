import React from "react";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
  TextInformationDiv,
} from "./HeaderBar.styles.js";

const HeaderBarPR = () => {
  return (
    <HeaderContainerDiv>
      <TitleDiv>Puerto Rico</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <TextInformationDiv>Players</TextInformationDiv>
          <TextInformationDiv>Mickias</TextInformationDiv>
          <TextInformationDiv>Rob</TextInformationDiv>
          <TextInformationDiv>Yiqi</TextInformationDiv>
          <TextInformationDiv>Dylan</TextInformationDiv>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <TextInformationDiv>Wins</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
          <TextInformationDiv>0</TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarPR;
