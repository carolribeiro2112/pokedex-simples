import { Overlay, PokemonInfo} from './styles';

export const PokeModal = ({isOpen, onCloseModal, pokemonDetails, props}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay pokemonDetails={pokemonDetails}>
      <div className='modal'>
        <button onClick={onCloseModal} type="button">X</button>
        <PokemonInfo props={pokemonDetails.types[0].type.name}>
          <div>
            <p>{pokemonDetails.name}</p>
            <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
            {
              pokemonDetails.abilities?.map((item) => (
                <p>{item.ability.name}</p>
              ))
            }  
          </div>
        </PokemonInfo>

        <div>
          {
            pokemonDetails.stats?.map((item) => (
              <p>{item.stat.name}: {item.base_stat}</p>
            ))
          }
        </div>
      </div>  
    </Overlay>
  )
}