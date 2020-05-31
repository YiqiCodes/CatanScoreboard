import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Dylan from "../../assets/Dylan.png";
import Mickias from "../../assets/Mickias.png";
import Rob from "../../assets/Rob.png";
import Yiqi from "../../assets/Yiqi.png";
// Styles
import {
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  TextInformationDiv,
  ToggleSeasonButton,
  PlayerImage,
  InformationColumn,
  SubTitleText,
} from "./HeaderBar.styles.js";

const HeaderBar = () => {
  const [gamescatanscore, setGamesCatanScore] = useState([]);
  const [newgamescatanscore, setNewGamesCatanScore] = useState([[]]);
  const totalWins = [0, 0, 0, 0];

  useEffect(() => {
    axios.get(`/api/users/adam`).then((response) => {
      setGamesCatanScore(response.data[0].games.catan);
    });
  }, [gamescatanscore]);

  useEffect(() => {
    axios.get("/api/users/adam").then((response) => {
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
    <HeaderContainerDiv>
      <TitleDiv>
        <Link to="/">
          <ToggleSeasonButton> Back </ToggleSeasonButton>
        </Link>
        Settlers of Catan
      </TitleDiv>
      <ScoreContainerDiv>
        <InformationColumn>
          <SubTitleText>Settlers</SubTitleText>
          <PlayerImage src={Dylan} alt="" />
          <PlayerImage src={Mickias} alt="" />
          <PlayerImage src={Rob} alt="" />
          <PlayerImage src={Yiqi} alt="" />
        </InformationColumn>
        <InformationColumn>
          <SubTitleText>Total Wins</SubTitleText>
          <TextInformationDiv style={{ background: "green" }}>
            {totalWins[0] + gamescatanscore[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {totalWins[1] + gamescatanscore[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {totalWins[2] + gamescatanscore[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {totalWins[3] + gamescatanscore[3]}
          </TextInformationDiv>
        </InformationColumn>
        <InformationColumn>
          <SubTitleText> S.2 Wins</SubTitleText>
          <TextInformationDiv style={{ background: "green" }}>
            {totalWins[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {totalWins[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {totalWins[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {totalWins[3]}
          </TextInformationDiv>
        </InformationColumn>
        <InformationColumn>
          <SubTitleText>S.1 Wins</SubTitleText>
          <TextInformationDiv style={{ background: "green" }}>
            {gamescatanscore[0]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "red" }}>
            {gamescatanscore[1]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "blue" }}>
            {gamescatanscore[2]}
          </TextInformationDiv>
          <TextInformationDiv style={{ background: "orange" }}>
            {gamescatanscore[3]}
          </TextInformationDiv>
        </InformationColumn>
      </ScoreContainerDiv>
    </HeaderContainerDiv>
  );
};

export default HeaderBar;
