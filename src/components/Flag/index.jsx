import { TypeFlag } from "./styles"

export const Flag = ({children, props}) => {
  return (
    <TypeFlag props={props}>
      {children}
    </TypeFlag>
  )
}