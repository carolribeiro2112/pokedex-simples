import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto 50px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 5px 10px;

  @media (max-width: 1024px) {
    max-width: 650px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 5px 10px;
  }
`;