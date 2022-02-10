import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  >div {
    width: 600px;
    height: 500px;
    background-color: #FFF;
    margin: 150px auto;
    border-radius: 30px;
  }
`;