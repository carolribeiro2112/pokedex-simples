import styled from 'styled-components';

export const StatBar = styled.div`
  display: flex;
  align-items: center;
  > div {
    min-width: 200px;
    flex:1;
    height: 4px;
    border-radius: 4px;
    background:  #DCDDE0;
    position: relative;
    > div{
      height: 4px;
      border-radius: 4px;
      background: #4CD62B;
    }
  }
`;