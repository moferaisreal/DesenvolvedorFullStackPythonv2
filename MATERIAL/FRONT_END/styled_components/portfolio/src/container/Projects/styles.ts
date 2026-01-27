import styled from "styled-components";

export const UList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2.25rem;
  row-gap: 2.5rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 1rem;
  }
`;
