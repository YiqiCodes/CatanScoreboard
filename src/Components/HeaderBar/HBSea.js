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

const HeaderBarSea = () => {
  const [seagamesscore, setSeaGamesScore] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/adam`).then((response) => {
      setSeaGamesScore(response.data[0].games.sea);
    });
  }, [seagamesscore]);

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
            {seagamesscore[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {seagamesscore[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {seagamesscore[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {seagamesscore[3]}
          </TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </OtherHeaderContainerDiv>
  );
};

export default HeaderBarSea;
