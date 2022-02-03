import styled from "styled-components";

export const bgType = {
  grass: "#62b957",
  fire: "#fd7d24",
  water: "#4a90da",
  bug: "#8cb230",
  normal: "#9da0aa",
  poison: "#a552cc",
  electric: "#eed535",
  ground: "#dd7748",
  fairy: "#ed6ec7",
  fighting: "#d04164",
  flying: "#748fc9",
  rock: "#baab82",
  ice: "#61cec0",
  psychic: "#ea5d60",
  dragon: "#0f6ac0",
  ghost: "#556aae",
  steel: "#417d9a",
};

export const TypeFlag = styled.div`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  background-color: ${({props}) => bgType[props]|| bgType.rock 
  };
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
`;