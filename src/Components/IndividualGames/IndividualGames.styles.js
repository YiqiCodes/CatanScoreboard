import styled from "styled-components";

export const IndividualGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  position: absolute;
`;

export const IndividualGameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 2px solid white;
  border-radius: 12px;
  margin: 1rem;
  padding: 1rem;
`;

export const ToggleSeasonButton = styled.button`
  width: 5rem;
  height: 2rem;
  margin: 0.5rem;
  padding: 2px;
  border-radius: 5px;
  background: #423826;
  color: white;
`;
