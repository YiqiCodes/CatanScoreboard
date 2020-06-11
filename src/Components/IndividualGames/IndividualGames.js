import React, { useState, useEffect } from "react";
import oldGames from "../../Pages/Helpers/OldData";
import axios from "axios";

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
  ScoreInput,
  ErrorText,
  GameNumberTitle,
  GameHeader,
  DeleteGameButton,
} from "./IndividualGames.styles.js";

import { notification } from "antd";
import { Link } from "react-router-dom";

// Hooks
import { useGames, useGamesTotal } from "../../hooks/games/useGames";

const IndividualGames = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [season, setSeason] = useState(2);
  const [validScore, setValidScore] = useState(false);
  const { games, fetchGames, createGame } = useGames();
  const { gamesTotal, fetchGamesTotal } = useGamesTotal();
  // eslint-disable-next-line
  const gameTracker = Object.keys(games.data);
  let tenScore = false;

  useEffect(() => {
    fetchGames();
    fetchGamesTotal();
    // eslint-disable-next-line
  }, []);

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
    let scoreValidity = true;
    const body = {
      0: scores[0],
      1: scores[1],
      2: scores[2],
      3: scores[3],
    };

    // Check if score is appropriate
    // eslint-disable-next-line
    Object.values(body).map((score) => {
      console.log(score);
      if (score < 2 || score > 10) {
        scoreValidity = false;
        setValidScore(true);
        // eslint-disable-next-line
        return;
      }
      if (parseInt(score) === 10) tenScore = true;
    });

    if (scoreValidity === true && tenScore === true) {
      console.log("valid");
      createGame(body);
      setValidScore(false);
      window.location.href = "/catan";
    } else {
      setValidScore(true);
    }
  };

  const deleteGame = (id) => {
    return axios
      .delete("/api/games", { data: { identification: id } })
      .then((response) => {
        window.location.href = "/catan";
        return response.data;
      })
      .catch((error) => {
        console.log("ERROR");
      });
  };

  const renderInput = (index) => (
    <InputWrapper>
      <ScoreInput
        value={scores[index]}
        onChange={(event) => handleChange(event, index)}
        // onPressEnter={(event) => handleScoreSubmit(event)}
        type="number"
        min="2"
        max="10"
      />
    </InputWrapper>
  );

  return (
    <>
      <HeaderContainerDiv>
        <BackButtonDiv>
          <Link to="/">
            <GoBackButton> {"<"} </GoBackButton>
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
              <TextInformationDiv key={index}>
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
            {oldGames.catanSeasonOne.map((game, index) => (
              <TextInformationDiv key={index}>{game}</TextInformationDiv>
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
                {validScore ? (
                  <ErrorText>Please enter scores between 2-10</ErrorText>
                ) : null}
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
              {Object.keys(games.data).map((groupKey, index) => (
                <div key={groupKey}>
                  <HexagonDiv>
                    <GameHeader>
                      <GameNumberTitle>{`Game ${gameTracker[index]}`}</GameNumberTitle>
                      <DeleteGameButton
                        onClick={() =>
                          deleteGame(games.data[groupKey][index].game_id)
                        }
                      >
                        X
                      </DeleteGameButton>
                    </GameHeader>
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
