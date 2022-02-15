import { Title } from './styles'

export const Text = ({children, as, props}) => {
  return (
    <Title as={as} props={props}>
      {children}
    </Title>
  )
}