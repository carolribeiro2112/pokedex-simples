import styled from "styled-components";

export const bgType = {
  grass: "#8bbe8a",
  fire: "#ffa756",
  water: "#58abf6",
  bug: "#8bd674",
  normal: "#b5b9c4",
  poison: "#9f6e97",
  electric: "#f2cb55",
  ground: "#f78551",
  fairy: "#eba8c3",
  fighting: "#eb4971",
  flying: "#748fc9",
  rock: "#6f6e78",
  ice: "#91d8df",
  psychic: "#ff6568",
  dragon: "#7383b9",
  ghost: "#8571be",
  steel: "#4c91b2",
  default: " #fafafa"
};

export const Container = styled.div`
  background-color: ${({props}) => bgType[props]|| bgType.rock };
  height: 130px;
  padding: 15px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    h2 {
      font-size: 30px;
      font-weight: bold;
      color: #fff;
      text-transform: capitalize;
      text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.3);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 180px;
    }

    .flag-container {
      margin-top: 10px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
  }

  img {
    margin-left: 10px;
  }
`;