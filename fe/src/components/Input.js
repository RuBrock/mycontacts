import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.neutral.white};
  border: 2px solid ${({ theme }) => theme.colors.neutral.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.light};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
