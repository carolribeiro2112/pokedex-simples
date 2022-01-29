import { Title } from './styles'

export const Text = ({children, as}) => {
  return (
    <Title as={as}>
      {children}
    </Title>
  )
}