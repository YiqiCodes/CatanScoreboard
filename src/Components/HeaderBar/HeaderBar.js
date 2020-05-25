import React, { useEffect, useState } from "react";
import axios from "axios";

// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  ScoreNameDiv,
  TotalWinsDiv,
  SeasonWinsDiv,
  TextInformationDiv,
} from "./HeaderBar.styles.js";

const HeaderBar = () => {
  const [gamescatanscore, setGamesCatanScore] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8001/api/users/adam").then((response) => {
      setGamesCatanScore(response.data[0].games.catan);
    });
  }, [gamescatanscore]);

  return (
    <HeaderContainerDiv style={{ position: "fixed", top: "0" }}>
      <TitleDiv>Catan</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <TextInformationDiv>Players</TextInformationDiv>
          <TextInformationDiv>Yiqi</TextInformationDiv>
          <TextInformationDiv>Mickias</TextInformationDiv>
          <TextInformationDiv>Rob</TextInformationDiv>
          <TextInformationDiv>Dylan</TextInformationDiv>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <TextInformationDiv>Total Wins</TextInformationDiv>
          <TextInformationDiv>15</TextInformationDiv>
          <TextInformationDiv>12</TextInformationDiv>
          <TextInformationDiv>11</TextInformationDiv>
          <TextInformationDiv>7</TextInformationDiv>
        </TotalWinsDiv>
        <SeasonWinsDiv>
          <TextInformationDiv>Season Two</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
          <TextInformationDiv>0</TextInformationDiv>
          <TextInformationDiv>1</TextInformationDiv>
        </SeasonWinsDiv>
        <SeasonWinsDiv>
          <TextInformationDiv>Season One</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[3]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[2]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[1]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[0]}</TextInformationDiv>
        </SeasonWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
