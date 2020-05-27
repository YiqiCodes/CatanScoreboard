import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Input } from "antd";

import {
  IndividualGamesContainer,
  IndividualGameContainer,
  ToggleSeasonButton,
  ButtonContainer,
  InputWrapper,
  ToggleSeasonButtonDiv,
  SaveField,
  ScoreForm,
  NameScore,
} from "./IndividualGames.styles.js";

const IndividualGames = () => {
  const [scores, setScores] = useState([0, 0, 0, 0]);
  const [season, setSeason] = useState(2);
  const [gamesscore, setGamesScore] = useState([]);
  const [seasonTwoScore, setSeasonTwoScore] = useState([]);
  const totalScores = [];

  const url =
    "http://localhost:8001" || "https://catanscoreboard.herokuapp.com";

  useEffect(() => {
    axios.get(`${url}/api/users/adam`).then((response) => {
      setGamesScore(response.data[0].games);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    axios.get(`${url}/api/users/adam`).then((response) => {
      setSeasonTwoScore(response.data[0].newgames);
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
    Promise.all([axios.put(`${url}/api/users/update`, { scores })])
      .then(() => {
        window.location.reload(false);
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
        style={{ textAlign: "center" }}
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
    <IndividualGamesContainer>
      <>
        <ButtonContainer>
          <ToggleSeasonButton onClick={handleSeasonSubmit}>
            Toggle Season
          </ToggleSeasonButton>
          {season === 2 ? (
            <SaveField>
              <ScoreForm onSubmit={handleScoreSubmit}>
                <ToggleSeasonButtonDiv>
                  <ToggleSeasonButton style={{ background: "brown" }}>
                    Save Score
                  </ToggleSeasonButton>
                </ToggleSeasonButtonDiv>
                <h3>Submit New Game</h3>
                <NameScore>Dylan:</NameScore>
                {renderInput(0)}
                <NameScore>Mickias:</NameScore>
                {renderInput(1)}
                <NameScore>Rob:</NameScore>
                {renderInput(2)}
                <NameScore>Yiqi:</NameScore>
                {renderInput(3)}
              </ScoreForm>
            </SaveField>
          ) : null}
          <Link to="/">
            <ToggleSeasonButton style={{ background: "#8f836f" }}>
              Go Back
            </ToggleSeasonButton>
          </Link>
        </ButtonContainer>
        {season === 2 ? (
          <>
            <h2>Season Two</h2>
            <IndividualGameContainer>
              Total Points: <br></br>
              <br></br>
              Dylan: {totalScores[0]} <br></br>
              Mickias: {totalScores[1]} <br></br>
              Rob: {totalScores[2]} <br></br>
              Yiqi: {totalScores[3]}
            </IndividualGameContainer>
            {seasonTwoScore.map((game) => {
              return (
                <IndividualGameContainer>
                  Dylan: {game[0]} <br></br>
                  Mickias: {game[1]} <br></br>
                  Rob: {game[2]} <br></br>
                  Yiqi: {game[3]} <br></br>
                </IndividualGameContainer>
              );
            })}
          </>
        ) : (
          <>
            <h2>Season One</h2>
            <div style={{ textAlign: "center" }}>
              **advanced analytics not available**
              <br></br>
              <br></br>
              {`Yiqi: ${gamesscore.catan[3]}`} <br></br>
              {`Mickias: ${gamesscore.catan[1]}`} <br></br>
              {`Rob: ${gamesscore.catan[2]}`} <br></br>
              {`Dylan: ${gamesscore.catan[0]}`} <br></br>
              Gray: 1 <br></br>
              Jacqueline: 1
            </div>
          </>
        )}
      </>
    </IndividualGamesContainer>
  );
};

export default IndividualGames;
