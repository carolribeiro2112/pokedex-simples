import { Container } from './styles';

export const Card = ({children, props}) => {
  return(
    <Container props={props}>
      {children}
    </Container>   
  )
}