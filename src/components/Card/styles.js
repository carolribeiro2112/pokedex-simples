import styled from "styled-components";
import pokeballImg from "../../assets/watermark-pokeball.svg";

export const bgType = {
  bug: "#8bd674",
  dark: "#6f6e78",
  dragon: "#7383b9",
  electric: "#f2cb55",
  fairy: "#eba8c3",
  fighting: "#eb4971",
  fire: "#ffa756",
  flying: "#748fc9",
  ghost: "#8571be",
  grass: "#8bbe8a",
  ground: "#f78551",
  ice: "#91d8df",
  normal: "#b5b9c4",
  poison: "#9f6e97",
  psychic: "#ff6568",
  rock: "#d4c294",
  steel: "#4c91b2",
  water: "#58abf6",
  default: " #fafafa"
};

export const Container = styled.div`
  background: url(${pokeballImg}) right center no-repeat;
  background-color: ${({props}) => bgType[props]|| bgType.rock };
  height: 130px;
  padding: 15px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: background-color 0.2s;

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

  :hover {
    cursor: pointer;
    filter: opacity(0.8);
  }
`;