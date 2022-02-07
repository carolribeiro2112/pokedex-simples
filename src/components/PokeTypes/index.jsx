import bugImg from '../../assets/bug.svg';
import darkImg from '../../assets/dark.svg';
import dragonImg from '../../assets/dragon.svg';
import electricImg from '../../assets/electric.svg';
import fairyImg from '../../assets/fairy.svg';
import fightingImg from '../../assets/fighting.svg';
import fireImg from '../../assets/fire.svg';
import flyingImg from '../../assets/flying.svg';
import ghostImg from '../../assets/ghost.svg';
import grassImg from '../../assets/grass.svg'
import groundImg from '../../assets/ground.svg';
import iceImg from '../../assets/ice.svg';
import normalImg from '../../assets/normal.svg';
import poisonImg from '../../assets/poison.svg';
import psychicImg from '../../assets/psychic.svg';
import rockImg from '../../assets/rock.svg';
import steelImg from '../../assets/steel.svg';
import waterImg from '../../assets/water.svg';

const PokeTypes = {
  bug: bugImg,
  dark: darkImg,
  dragon: dragonImg,
  electric: electricImg,
  fairy: fairyImg,
  fighting: fightingImg,
  fire: fireImg,
  flying: flyingImg,
  ghost: ghostImg,
  grass: grassImg,
  ground: groundImg,
  ice: iceImg,
  normal: normalImg,
  poison: poisonImg,
  psychic: psychicImg,
  rock: rockImg,
  steel: steelImg,
  water: waterImg
}

export const PokemonType = ({type}) => {
  return (
    <img src={PokeTypes[type]} alt={type} />
  )
}