import styled from "styled-components";

export const OutterGameContainerDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #000000;
  color: white;
`;

export const ScrollableContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 40%;
  /* min-height: 88.3vh; */
  width: 100%;
  overflow-y: scroll;
  background: black;
`;
export const GoBackButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  bottom: 0;
  margin-bottom: 1rem;
  width: 10rem;
  border-radius: 5px;
  height: 2rem;
`;
