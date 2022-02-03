import styled, {css} from "styled-components";

export const Title = styled.h2`
  ${({as}) => css`
    ${as === 'h1' && css`
      font-size: 42px;
      color: black;
    `}
  `} 
`;