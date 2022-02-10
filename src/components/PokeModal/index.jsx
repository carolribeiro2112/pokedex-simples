import { Overlay } from './styles';

export const PokeModal = ({isOpen, onCloseModal}) => {
  if (!isOpen) {
    return null
  }

  return (
    <Overlay
      isOpen={isOpen} 
    >
      <div>
        <button onClick={onCloseModal} type="button"> close </button>
      </div>
    </Overlay>
  )
}