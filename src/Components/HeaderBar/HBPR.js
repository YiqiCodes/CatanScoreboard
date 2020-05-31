import React, { useState, useEffect } from "react";

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

const HeaderBarPR = () => {
  const [prgamesscore, setPRGamesScore] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/adam`).then((response) => {
      setPRGamesScore(response.data[0].games.puerto);
    });
    // eslint-disable-next-line
  }, [prgamesscore]);

  return (
    <OtherHeaderContainerDiv>
      <OtherTitleDiv>Puerto Rico</OtherTitleDiv>
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
            {prgamesscore[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {prgamesscore[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {prgamesscore[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {prgamesscore[3]}
          </TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </OtherHeaderContainerDiv>
  );
};

export default HeaderBarPR;
