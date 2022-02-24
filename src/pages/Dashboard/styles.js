import styled from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 20px auto;

  button {
    width: 50px;
    height: 50px;
    margin-right: 10px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    font-size: 20px;
    background-color: #E2E2E2;
    color: black;
  }

  button:hover {
    filter: opacity(80%);
  }
`;