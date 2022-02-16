import { Abilities } from '../Abilities';
import { Text } from '../Text'
import { Overlay, PokemonInfo, PokemonStats } from './styles';

export const PokeModal = ({isOpen, onCloseModal, pokemonDetails}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay pokemonDetails={pokemonDetails}>
      <div className='modal'>
        <button onClick={onCloseModal} type="button">X</button>
        <PokemonInfo props={pokemonDetails.types[0].type.name}>
          <div>
            <Text>{pokemonDetails.name}</Text>
            <div className='imagem'>
              <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
            </div>
            <div className='ability-info'> 
              {
                pokemonDetails.abilities?.map((item) => (
                  <Abilities props={pokemonDetails.types[0].type.name} >{item.ability.name}</Abilities>
                ))
              }  
            </div>
          </div>
        </PokemonInfo>

        <PokemonStats>
          <div>
            <Text>Base Stats</Text>
            {
              pokemonDetails.stats?.map((item) => (
                <p>{item.stat.name}: {item.base_stat}</p>
              ))
            }
          </div>
        </PokemonStats>
      </div>  
    </Overlay>
  )
}