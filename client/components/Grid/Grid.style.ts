import styled from 'styled-components';

export const StyledDiv = styled.div`
  grid-area: 1 / 2 / -1 / -1;
  display: grid;
  align-self: stretch;
  grid-template-columns: repeat(minmax(auto-fill, 250px));
  grid-template-rows: repeat(minmax(auto-fill, 80px));
`;
