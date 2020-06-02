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
  border: 2px;
  border-radius: 12px;
  margin: 2rem;
  padding: 1rem;
  text-align: center;
  font-weight: 200;
  width: 10rem;
  height: 10rem;
  background: #eeeeee;
  color: #252525;
`;

export const HexagonDiv = styled.div`
  position: relative;
  flex-direction: column;
  width: 300px;
  height: 173.21px;
  background-color: #252525;
  margin: 86.6px 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: 200;
  color: #eeeeee;

  &::before,
  :after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 150px solid transparent;
    border-right: 150px solid transparent;
  }

  &::before {
    bottom: 100%;
    border-bottom: 86.6px solid #252525;
  }

  &::after {
    top: 100%;
    width: 0;
    border-top: 86.6px solid #252525;
  }
`;

export const SpacingDiv = styled.div`
  height: 25px;
  background: transparent;
`;
export const ToggleSeasonButton = styled.button`
  width: 8rem;
  height: 2.5rem;
  margin: 0.5rem;
  padding: 2px;
  border-radius: 5px;
  background: #423826;
  color: white;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapper = styled.div``;

export const SaveField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ErrorText = styled.div`
  text-align: center;
  color: red;
`;

export const ToggleSeasonButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NameScore = styled.div`
  padding: 5px;
  display: flex;
  width: 10rem;
  justify-content: space-between;
`;
