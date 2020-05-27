import React, { useState, useEffect } from "react";

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

const HeaderBarPR = () => {
  const [prgamesscore, setPRGamesScore] = useState([]);

  useEffect(() => {
    axios
      .get(`https://catanscoreboard.herokuapp.com/api/users/adam`)
      .then((response) => {
        setPRGamesScore(response.data[0].games.puerto);
      });
    // eslint-disable-next-line
  }, [prgamesscore]);

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
          <TextInformationDiv>{prgamesscore[2]}</TextInformationDiv>
          <TextInformationDiv>{prgamesscore[1]}</TextInformationDiv>
          <TextInformationDiv>{prgamesscore[3]}</TextInformationDiv>
          <TextInformationDiv>{prgamesscore[0]}</TextInformationDiv>
        </TotalWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBarPR;
