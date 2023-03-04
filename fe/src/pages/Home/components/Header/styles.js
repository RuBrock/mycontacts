import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent};;
  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.neutral.lighter};
  margin-top: 32px;
  margin-bottom: 16px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: 700;
    padding: 8px 16px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: ${({ theme }) => theme.borderRadius.main};
    transition: all 0.3s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: ${({ theme }) => theme.colors.neutral.white};
    }
  }
`;
