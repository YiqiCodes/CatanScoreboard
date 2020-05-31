import styled from "styled-components";

export const HeaderContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40%;
  width: 100%;
  background: #2d3842;
  color: white;
  position: fixed;
  top: 0;
`;

export const OtherHeaderContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #2d3842;
  color: white;
`;

export const TitleDiv = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
  height: 5%;
  padding: 5px;
  width: 100%;
  margin: 5px;
  font-size: x-large;
  font-weight: 200;
`;

export const OtherTitleDiv = styled.div`
  justify-content: center;
  display: flex;
  text-align: center;
  padding: 5px;
  margin: 5px;
  font-size: x-large;
  font-weight: 200;
`;

export const PlayerImage = styled.img`
  width: 50px;
  height: 50px;
`;

export const ScoreContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95%;
  width: 100%;
  text-align: center;
`;

export const InformationColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;
  text-align: center;
  height: 90%;
`;

export const ToggleSeasonButton = styled.button`
  position: fixed;
  left: 0;
  margin-left: 2rem;
  color: #252525;
  background: #eeeeee;
  height: 2rem;
  width: 4rem;
  border-radius: 4px;
`;

export const TextInformationDiv = styled.div`
  background: aqua;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0px;
`;

export const SubTitleText = styled.div`
  font-weight: 200;
`;

export const ScoreNameDiv = styled.div``;
export const TotalWinsDiv = styled.div``;
