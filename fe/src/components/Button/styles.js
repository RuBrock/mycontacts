import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 52px;
  padding: 0 16px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral.white};
  transition: background 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.neutral.light} !important;
    cursor: default !important;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
