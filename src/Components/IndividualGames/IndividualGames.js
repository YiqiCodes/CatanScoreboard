import React, { useState } from "react";

import { IndividualGamesContainer } from "./IndividualGames.styles.js";

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
            <button style={{ color: "white" }}>Toggle Season</button>
          </form>
        </div>
        {season === 2 ? (
          <>
            <h2>Season Two</h2>
            <h3>
              Yiqi: 1 <br></br>
              Mickias: 1 <br></br>
              Rob:0 <br></br>
              Dylan:1 <br></br>
            </h3>
          </>
        ) : (
          <>
            <h2>Season One</h2>
            <h3>**Advanced analytics not available</h3>
            <h3>
              Yiqi: 14 <br></br>
              Mickias: 11 <br></br>
              Rob:11 <br></br>
              Dylan: 6 <br></br>
              Gray: 1 <br></br>
              Jacqueline: 1
            </h3>
          </>
        )}
      </>
    </IndividualGamesContainer>
  );
};

export default IndividualGames;
