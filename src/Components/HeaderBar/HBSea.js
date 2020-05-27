import React, { useEffect, useState } from "react";
import axios from "axios";
// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
  TextInformationDiv,
} from "./HeaderBar.styles.js";

const HeaderBarSea = () => {
  const [seagamesscore, setSeaGamesScore] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/adam`).then((response) => {
      setSeaGamesScore(response.data[0].games.sea);
    });
  }, [seagamesscore]);

  return (
    <HeaderContainerDiv>
      <TitleDiv>Seafarers</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <TextInformationDiv>Players</TextInformationDiv>
          <TextInformationDiv>Dylan</TextInformationDiv>
          <TextInformationDiv>Mickias</TextInformationDiv>
          <TextInformationDiv>Rob</TextInformationDiv>
          <TextInformationDiv>Yiqi</TextInformationDiv>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <TextInformationDiv>Wins</TextInformationDiv>
          <TextInformationDiv>{seagamesscore[0]}</TextInformationDiv>
          <TextInformationDiv>{seagamesscore[1]}</TextInformationDiv>
          <TextInformationDiv>{seagamesscore[2]}</TextInformationDiv>
          <TextInformationDiv>{seagamesscore[3]}</TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarSea;
