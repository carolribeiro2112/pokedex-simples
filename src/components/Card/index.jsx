import { Container } from './styles';

export const Card = ({children, props, onClickModal }) => {
  return(
    <Container props={props} onClick={onClickModal}>
      {children}
    </Container>   
  )
}