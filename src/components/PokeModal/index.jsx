import { Overlay } from './styles';

export const PokeModal = ({isOpen, onCloseModal, pokemonDetails}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay pokemonDetails={pokemonDetails}>
      <div className='modal'>
        <button onClick={onCloseModal} type="button"> close </button>
        <p>{pokemonDetails.name}</p>
        <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
        <p>{pokemonDetails.abilities[0].ability.name}</p>
      </div>
    </Overlay>
  )
}