import React from "react";

import Dylan from "../../assets/Dylan.png";
import Mickias from "../../assets/Mickias.png";
import Rob from "../../assets/Rob.png";
import Yiqi from "../../assets/Yiqi.png";

import oldGames from "../../Pages/Helpers/OldData";

// Styles
import {
  OtherHeaderContainerDiv,
  OtherTitleDiv,
  ScoreContainerDiv,
  TotalWinsDiv,
  TextInformationDiv,
  InformationColumn,
  PlayerImage,
  SubTitleText,
} from "./HeaderBar.styles.js";

const HeaderBarSea = () => {
  return (
    <OtherHeaderContainerDiv>
      <OtherTitleDiv>Seafarers</OtherTitleDiv>
      <ScoreContainerDiv
        style={{ width: "50%", justifyContent: "space-evenly" }}
      >
        <InformationColumn>
          <SubTitleText>Settlers</SubTitleText>
          <PlayerImage src={Dylan} alt="" />
          <PlayerImage src={Mickias} alt="" />
          <PlayerImage src={Rob} alt="" />
          <PlayerImage src={Yiqi} alt="" />
        </InformationColumn>
        <TotalWinsDiv>
          <SubTitleText>Wins</SubTitleText>
          <TextInformationDiv style={{ background: "green" }}>
            {oldGames.seafarers[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {oldGames.seafarers[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {oldGames.seafarers[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {oldGames.seafarers[3]}
          </TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </OtherHeaderContainerDiv>
  );
};

export default HeaderBarSea;
