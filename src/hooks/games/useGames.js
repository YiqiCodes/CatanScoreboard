import { useState } from "react";
import axios from "axios";

const useGames = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGames = () => {
    setLoading(true);
    setError(null);

    return axios
      .get("/api/games")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const createGame = (body) => {
    setLoading(true);
    setError(null);

    return axios
      .post("/api/games", body)
      .then((response) => {
        console.log(response.data);
        // setData(response.data);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const games = { data, loading, error };

  return { games, fetchGames, createGame };
};

const useGamesTotal = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGamesTotal = () => {
    setLoading(true);
    setError(null);

    return axios
      .get("/api/games/total")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        return response.data;
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  const gamesTotal = { data, loading, error };

  return { gamesTotal, fetchGamesTotal };
};

export { useGames, useGamesTotal };
