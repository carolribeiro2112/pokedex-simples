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

export const TypeFlag = styled.div`
  width: 85px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  background-color: ${({props}) => bgType[props]|| bgType.rock};
  color: #fff;
  border-radius: 4px;
  margin-right: 10px;
  padding: 5px;
  box-shadow: 1px 1px 2px rgba(150, 150, 150, 0.5);
  img {
    margin-right: 5px;
    margin-left: 0;
    width: 20px;
    height: 20px;
  }
`;