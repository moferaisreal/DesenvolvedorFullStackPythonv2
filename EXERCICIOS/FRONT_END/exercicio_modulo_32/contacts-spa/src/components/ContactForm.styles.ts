import styled from 'styled-components';
import * as theme from '../styles/theme';
type ButtonVariant = 'default' | 'danger' | 'edit';

export const Form = styled.form`
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.theme.colors.textSecondary};
`;

export const Input = styled.input`
  width: 50%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: none;
  color: ${theme.theme.colors.textSecondary};

  &::placeholder {
    color: ${theme.theme.colors.textSecondary};
  }
`;

export const Button = styled.button<{ variant?: ButtonVariant }>`
  color: ${theme.theme.colors.textButton};
  padding: 0.75rem;
  border-radius: 8px;
  font-weight: bold;
  width: 15%;
  background: ${({ theme, variant }) =>
    variant === 'danger' ? theme.colors.danger : theme.colors.primary};

  /* HOVER */
  &:hover {
    scale: 1.05;
    background: ${({ theme, variant }) =>
      variant === 'edit'
        ? theme.colors.success
        : variant === 'danger'
          ? theme.colors.danger
          : theme.colors.accent};
  }
`;
