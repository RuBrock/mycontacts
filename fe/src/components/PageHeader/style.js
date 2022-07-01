import styled from 'styled-components';

export const Container = styled.div`
  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    img {
      transform: rotate(-90deg);
      margin-right: 8px;
    }

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
    }
  }

  h1 {
    margin-top: 8px;
    font-size: 24px;
  }
`;
