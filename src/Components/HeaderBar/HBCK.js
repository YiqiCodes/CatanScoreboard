import React, { useEffect, useState } from "react";
import axios from "axios";

import Dylan from "../../assets/Dylan.png";
import Mickias from "../../assets/Mickias.png";
import Rob from "../../assets/Rob.png";
import Yiqi from "../../assets/Yiqi.png";

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

const HeaderBarCK = () => {
  const [ckgamesscore, setCKGamesScore] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/adam`).then((response) => {
      setCKGamesScore(response.data[0].games.cities);
    });
  }, [ckgamesscore]);

  return (
    <OtherHeaderContainerDiv>
      <OtherTitleDiv>Cities & Knights</OtherTitleDiv>
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
            {ckgamesscore[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {ckgamesscore[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {ckgamesscore[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {ckgamesscore[3]}
          </TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </OtherHeaderContainerDiv>
  );
};

export default HeaderBarCK;
