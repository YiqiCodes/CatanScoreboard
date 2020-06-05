import React, { useState, useEffect } from "react";
import oldGames from "../../Pages/Helpers/OldData";

// Assets
import Dylan from "../../assets/Dylan.png";
import Mickias from "../../assets/Mickias.png";
import Rob from "../../assets/Rob.png";
import Yiqi from "../../assets/Yiqi.png";

// Components
import {
  IndividualGamesContainer,
  IndividualGameContainer,
  ToggleSeasonButton,
  ButtonContainer,
  InputWrapper,
  ToggleSeasonButtonDiv,
  SaveField,
  NameScore,
  HexagonDiv,
  SpacingDiv,
  HeaderContainerDiv,
  TitleDiv,
  ScoreContainerDiv,
  TextInformationDiv,
  PlayerImage,
  InformationColumn,
  SubTitleText,
  BackButtonDiv,
  GoBackButton,
} from "./IndividualGames.styles.js";

import { Input, notification } from "antd";
import { Link } from "react-router-dom";

// Hooks
import { useGames, useGamesTotal } from "../../hooks/games/useGames";

const IndividualGames = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [season, setSeason] = useState(2);
  const { games, fetchGames, createGame } = useGames();
  const { gamesTotal, fetchGamesTotal } = useGamesTotal();

  useEffect(() => {
    fetchGames();
    fetchGamesTotal();
    // eslint-disable-next-line
  }, []);

  console.log("games", games);

  useEffect(() => {
    if (games.error) {
      notification.error({
        message: "Error",
        description: games.error,
      });
    }
  }, [games.error]);

  const handleChange = (event, index) => {
    const newScores = [...scores];
    newScores[index] = event.target.value;
    setScores(newScores);
  };

  const handleSeasonSubmit = (event) => {
    if (season === 2) {
      setSeason(1);
      event.preventDefault();
    }
    if (season === 1) {
      setSeason(2);
      event.preventDefault();
    }
  };

  const handleScoreSubmit = () => {
    const body = {
      0: scores[0],
      1: scores[1],
      2: scores[2],
      3: scores[3],
    };
    console.log("body");

    createGame(body);
  };

  const renderInput = (index) => (
    <InputWrapper>
      <Input
        style={{
          textAlign: "center",
          width: "5rem",
          color: "#252525",
          background: "#eeeeee",
          borderRadius: "6px",
        }}
        value={scores[index]}
        type="number"
        min="2"
        max="10"
        onChange={(event) => handleChange(event, index)}
        onPressEnter={handleScoreSubmit}
      />
    </InputWrapper>
  );

  return (
    <>
      <HeaderContainerDiv>
        <BackButtonDiv>
          <Link to="/">
            <GoBackButton> Back </GoBackButton>
          </Link>
        </BackButtonDiv>
        <TitleDiv>Settlers of Catan</TitleDiv>
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
            {gamesTotal.data.map((game, index) => (
              <TextInformationDiv>
                {game.wins + oldGames.catanSeasonOne[index]}
              </TextInformationDiv>
            ))}
          </InformationColumn>
          <InformationColumn>
            <SubTitleText>S2 Wins</SubTitleText>
            {gamesTotal.data.map((game, index) => (
              <TextInformationDiv key={index}>{game.wins}</TextInformationDiv>
            ))}
          </InformationColumn>
          <InformationColumn>
            <SubTitleText>S1 Wins</SubTitleText>
            {oldGames.catanSeasonOne.map((game) => (
              <TextInformationDiv>{game}</TextInformationDiv>
            ))}
          </InformationColumn>
        </ScoreContainerDiv>
      </HeaderContainerDiv>

      <IndividualGamesContainer>
        <>
          <ButtonContainer>
            <ToggleSeasonButton onClick={handleSeasonSubmit}>
              Toggle Season
            </ToggleSeasonButton>
            {season === 2 ? (
              <SaveField>
                <ToggleSeasonButtonDiv>
                  <ToggleSeasonButton
                    onClick={handleScoreSubmit}
                    style={{ background: "seagreen" }}
                  >
                    Save Score
                  </ToggleSeasonButton>
                </ToggleSeasonButtonDiv>
                <NameScore>Dylan: {renderInput(0)}</NameScore>
                <NameScore>Mickias: {renderInput(1)}</NameScore>
                <NameScore>Rob:{renderInput(2)}</NameScore>
                <NameScore>Yiqi:{renderInput(3)}</NameScore>
              </SaveField>
            ) : null}
          </ButtonContainer>
          {season === 2 ? (
            <>
              <IndividualGameContainer>
                <NameScore style={{ justifyContent: "center" }}>
                  Total Points:
                </NameScore>
                {gamesTotal.data.map((game, index) => (
                  <div key={index}>{`${game.name}: ${game.score} `}</div>
                ))}
              </IndividualGameContainer>
              {Object.keys(games.data).map((groupKey) => (
                <div key={groupKey}>
                  <HexagonDiv>
                    {games.data[groupKey].map((game, index) => (
                      <div key={index}>{`${game.name}: ${game.score} `}</div>
                    ))}
                  </HexagonDiv>
                  <SpacingDiv />
                </div>
              ))}
            </>
          ) : (
            <>
              <h2>Season One</h2>
              <div style={{ textAlign: "center" }}>
                <div> **advanced analytics not available** </div>
                <div> {`Yiqi: ${oldGames.catanSeasonOne[3]}`} </div>
                <div> {`Mickias: ${oldGames.catanSeasonOne[1]}`} </div>
                <div> {`Rob: ${oldGames.catanSeasonOne[2]}`} </div>
                <div>{`Dylan: ${oldGames.catanSeasonOne[0]}`} </div>
                <div> Gray: 1 </div>
                <div> Jacqueline: 1 </div>
              </div>
            </>
          )}
        </>
      </IndividualGamesContainer>
    </>
  );
};

export default IndividualGames;
