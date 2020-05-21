import styled from "styled-components";

export const OutterContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000000;
  color: white;
`;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const GameImage = styled.img`
  height: 8rem;
  width: 8rem;
  padding: 5px;
  margin: 1rem;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 0;
`;
