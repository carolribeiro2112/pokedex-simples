import { AbilityFlag } from "./styles"

export const Abilities = ({children, props}) => {
  return (
    <AbilityFlag props={props}>
      {children}
    </AbilityFlag>
  )
}