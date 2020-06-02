import React, { useState, useEffect } from "react";
import axios from "axios";

import { Input } from "antd";

import oldGames from "../../Pages/Helpers/OldData";

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
} from "./IndividualGames.styles.js";

const IndividualGames = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [season, setSeason] = useState(2);
  const [seasonTwoScore, setSeasonTwoScore] = useState([]);
  const totalScores = [];

  // wrap into async await or do webhooks

  useEffect(() => {
    axios.get("/api/games/").then((response) => {
      console.log("response", response.data);
      setSeasonTwoScore(response.data);
    });
    // eslint-disable-next-line
  }, []);

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

  const handleScoreSubmit = (e) => {
    axios
      .put("/api/users/update", { scores })
      .then((response) => {
        e.preventDefault();
      })
      .catch((error) => console.log(error));
  };

  const totalPointsCalculator = (seasonTwoScore) => {
    let dylan = 0;
    let mickias = 0;
    let rob = 0;
    let yiqi = 0;

    // eslint-disable-next-line
    seasonTwoScore.map((game) => {
      dylan += game[0];
      mickias += game[1];
      rob += game[2];
      yiqi += game[3];
    });

    totalScores.push(dylan);
    totalScores.push(mickias);
    totalScores.push(rob);
    totalScores.push(yiqi);

    return totalScores;
  };

  totalPointsCalculator(seasonTwoScore);

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

  const uniqueGameIds = [
    ...new Set(seasonTwoScore.map((game) => game.game_id)),
  ];

  return (
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
              Total Points: <br></br>
              <br></br>
              Dylan: {totalScores[0]} <br></br>
              Mickias: {totalScores[1]} <br></br>
              Rob: {totalScores[2]} <br></br>
              Yiqi: {totalScores[3]}
            </IndividualGameContainer>
            {uniqueGameIds.map((gameID) => {
              const filteredGames = seasonTwoScore.filter(
                (game) => game.game_id === gameID
              );
              return (
                <>
                  <HexagonDiv>
                    {filteredGames.map((filteredGame) => {
                      return (
                        <div>{`${filteredGame.name}: ${filteredGame.score} `}</div>
                      );
                    })}
                  </HexagonDiv>
                  <SpacingDiv></SpacingDiv>
                </>
              );
            })}
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
  );
};

export default IndividualGames;
