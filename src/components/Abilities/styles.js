import styled from "styled-components";

export const bgType = {
  bug: "#8cb230",
  dark: "#58575F",
  dragon: "#0f6ac0",
  electric: "#eed535",
  fairy: "#ed6ec7",
  fighting: "#d04164",
  fire: "#fd7d24",
  flying: "#748fc9",
  ghost: "#556aae",
  grass: "#62b957",
  ground: "#dd7748",
  ice: "#61cec0",
  normal: "#9da0aa",
  poison: "#a552cc",
  psychic: "#ea5d60",
  rock: "#baab82",
  steel: "#417d9a",
  water: "#4a90da",
};

export const AbilityFlag = styled.div`
  width: 140px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 16px;
  background-color: ${({props}) => bgType[props]|| bgType.rock};
  color: #fff;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 1px 1px 2px rgba(150, 150, 150, 0.4);
`;