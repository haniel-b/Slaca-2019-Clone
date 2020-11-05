import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 220px auto;
  grid-template-rows: 68px 108rem;

  grid-template-areas:
    'LVB HD'
    'LVB BD';
`;

// LVB - Left Vertical Bar
// HD - Header
// BD - Body
