import styled from 'styled-components';

export const Pagination = styled.ul`
  display: flex;
  list-style: none;

  li {
    color: black;
  }

  li + li {
    margin-left: 1rem;
  }

  .pagination__item--active {
    background: none;
    filter: opacity(0.6);
    font-weight: bold;
    border: none;
    outline: 1px solid #171717;
  }

  .pagination__item--active:focus {
    outline: 1px solid #171717;
  }

`;