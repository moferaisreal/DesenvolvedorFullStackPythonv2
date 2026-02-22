import styled from 'styled-components';
import * as theme from '../styles/theme';

export const Card = styled.div`
  background: ${theme.theme.colors.card};
  padding: 1.5rem;
  border-radius: 16px;
  margin: 2rem;
`;

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
