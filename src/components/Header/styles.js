import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 1300px;
  margin: 35px auto;
  display: flex;
  
  h2{
    margin-right: 20px;
  }

  .input {
    margin: 30px auto;

    input {
      width: 200px;
      height: 30px;
    }
  }

  @media (max-width: 1024px) {
    max-width: 600px;
    margin: 35px auto;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
`;