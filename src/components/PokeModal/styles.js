import styled from 'styled-components';
import pokeballImg from '../../assets/Pokeball.svg';

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

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .modal {
    display: flex;
    position: relative;
    width: 700px;
    height: 500px;
    background-color: #FFF;
    margin: 150px auto;
    border-radius: 30px;

    button {
      position: absolute;
      background-color: #E2E2E2;
      border: none;
      height: 24px;
      width: 24px;
      font-size: 18px;
      font-weight: bold;
      top: 20px;
      right: 20px;
      border-radius: 50%;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }


  }
`;

export const PokemonInfo = styled.div`
  width: 350px;
  height: 500px;
  background-color: ${({props}) => bgType[props]|| bgType.rock };
  border-radius: 30px 0 0 30px;

  display: flex;
  justify-content: center;

  > div {
    margin: 50px auto;

    h2 {
      font-size: 32px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 40px;
      color: #fff;
      text-transform: capitalize;
      max-width: 180px;
    }

    .imagem {
      display: flex;
      align-items: center;
      justify-content: center;
      background: url(${pokeballImg}) center no-repeat;
      margin-bottom: 30px;
    }

    .ability-info {
      h3 {
        font-size: 24px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 10px;
        color: #fff;
      }

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const PokemonStats = styled.div`
  width: 350px;
  height: 500px;
  border-radius: 30px 0 0 30px;

  display: flex;
  justify-content: center;

  > div {
    margin: 50px auto;

    h2 {
      color: #62b957;
      margin-bottom: 40px;
    }

    p {
      margin-bottom: 8px;
      margin-top: 15px;
      color: #747476;
      text-transform: capitalize;
    }
  }

`;