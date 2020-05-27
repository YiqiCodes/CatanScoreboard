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

const HeaderBarCK = () => {
  const [ckgamesscore, setCKGamesScore] = useState([]);

  useEffect(() => {
    axios
      .get(`https://catanscoreboard.herokuapp.com/api/users/adam`)
      .then((response) => {
        setCKGamesScore(response.data[0].games.cities);
      });
  }, [ckgamesscore]);

  return (
    <HeaderContainerDiv>
      <TitleDiv>Cities & Knights</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <TextInformationDiv>Players</TextInformationDiv>
          <TextInformationDiv>Dylan</TextInformationDiv>
          <TextInformationDiv>Yiqi</TextInformationDiv>
          <TextInformationDiv>Mickias</TextInformationDiv>
          <TextInformationDiv>Rob</TextInformationDiv>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <TextInformationDiv>Wins</TextInformationDiv>
          <TextInformationDiv>
            {ckgamesscore[0]} <br></br>
          </TextInformationDiv>
          <TextInformationDiv> {ckgamesscore[3]}</TextInformationDiv>
          <TextInformationDiv> {ckgamesscore[2]}</TextInformationDiv>
          <TextInformationDiv> {ckgamesscore[1]}</TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarCK;
