import styled from "styled-components";

export const Container = styled.div`
  background-color: rgb(255, 167, 86);
  height: 130px;
  padding: 15px;
  border-radius: 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
    text-shadow: 1px 1px 2px rgba(150, 150, 150, 0.3);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
  }

  img {
    margin-left: 10px;
  }
`;