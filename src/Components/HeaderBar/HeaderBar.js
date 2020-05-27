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
  const [newgamescatanscore, setNewGamesCatanScore] = useState([[]]);
  const totalWins = [0, 0, 0, 0];

  useEffect(() => {
    axios
      .get(`https://catanscoreboard.herokuapp.com/api/users/adam`)
      .then((response) => {
        setGamesCatanScore(response.data[0].games.catan);
      });
  }, [gamescatanscore]);

  useEffect(() => {
    axios
      .get("https://catanscoreboard.herokuapp.com/api/users/adam")
      .then((response) => {
        setNewGamesCatanScore(response.data[0].newgames);
      });
  }, [newgamescatanscore]);

  const totalWinsCalculator = (scores) => {
    scores.forEach((score) => {
      const winner = score.indexOf(10);
      totalWins[winner]++;
    });
    return totalWins;
  };

  totalWinsCalculator(newgamescatanscore);

  return (
    <HeaderContainerDiv style={{ position: "fixed", top: "0" }}>
      <TitleDiv>Catan</TitleDiv>
      <ScoreContainerDiv>
        <ScoreNameDiv>
          <TextInformationDiv>Players</TextInformationDiv>
          <TextInformationDiv>Dylan</TextInformationDiv>
          <TextInformationDiv>Mickias</TextInformationDiv>
          <TextInformationDiv>Rob</TextInformationDiv>
          <TextInformationDiv>Yiqi</TextInformationDiv>
        </ScoreNameDiv>
        <TotalWinsDiv>
          <TextInformationDiv>Total Wins</TextInformationDiv>
          <TextInformationDiv>
            {totalWins[0] + gamescatanscore[0]}
          </TextInformationDiv>
          <TextInformationDiv>
            {totalWins[1] + gamescatanscore[1]}
          </TextInformationDiv>
          <TextInformationDiv>
            {totalWins[2] + gamescatanscore[2]}
          </TextInformationDiv>
          <TextInformationDiv>
            {totalWins[3] + gamescatanscore[3]}
          </TextInformationDiv>
        </TotalWinsDiv>
        <SeasonWinsDiv>
          <TextInformationDiv>Season Two</TextInformationDiv>
          <TextInformationDiv>{totalWins[0]}</TextInformationDiv>
          <TextInformationDiv>{totalWins[1]}</TextInformationDiv>
          <TextInformationDiv>{totalWins[2]}</TextInformationDiv>
          <TextInformationDiv>{totalWins[3]}</TextInformationDiv>
        </SeasonWinsDiv>
        <SeasonWinsDiv>
          <TextInformationDiv>Season One</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[0]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[1]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[2]}</TextInformationDiv>
          <TextInformationDiv>{gamescatanscore[3]}</TextInformationDiv>
        </SeasonWinsDiv>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
