import React, { useState } from "react";

// import SeasonTwoCatanScores from "../../Helpers/GameData";
import {
  IndividualGamesContainer,
  IndividualGameContainer,
  ToggleSeasonButton,
} from "./IndividualGames.styles.js";

const IndividualGames = () => {
  const [season, setSeason] = useState(2);

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

  return (
    <IndividualGamesContainer>
      <>
        <div>
          <form onSubmit={handleSeasonSubmit}>
            <ToggleSeasonButton>Toggle Season</ToggleSeasonButton>
          </form>
        </div>
        {season === 2 ? (
          <>
            <h2>Season Two</h2>
            <IndividualGameContainer>
              Total Points: <br></br>
              <br></br>
              Yiqi: 23 <br></br>
              Mickias: 20 <br></br>
              Dylan: 19 <br></br>
              Rob: 16
            </IndividualGameContainer>
            <IndividualGameContainer>
              Game 3: <br></br>
              <br></br>
              Dylan: 10 <br></br>
              Mickias: 6 <br></br>
              Yiqi: 5 <br></br>
              Rob: 4 <br></br>
            </IndividualGameContainer>
            <IndividualGameContainer>
              Game 2: <br></br>
              <br></br>
              Yiqi: 10 <br></br>
              Rob: 6 <br></br>
              Mickias: 4 <br></br>
              Dylan: 3 <br></br>
            </IndividualGameContainer>
            <IndividualGameContainer>
              Game 1: <br></br>
              <br></br>
              Mickias: 10 <br></br>
              Yiqi: 8 <br></br>
              Dylan: 6 <br></br>
              Rob: 6 <br></br>
            </IndividualGameContainer>
          </>
        ) : (
          <>
            <h2>Season One</h2>

            <div style={{ textAlign: "center" }}>
              **advanced analytics not available
              <br></br>
              <br></br>
              Yiqi: 14 <br></br>
              Mickias: 11 <br></br>
              Rob:11 <br></br>
              Dylan: 6 <br></br>
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
