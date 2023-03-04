import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  position: relative;
`;

export const ListHeader = styled.header`
  margin-bottom: 8px;

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
      margin-right: 8px;
    }

    img {
      transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
      transition: transform 0.2s ease-in;
    }
  }
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: 700;
        text-transform: uppercase;
        padding: 4px;
        border-radius: ${({ theme }) => theme.borderRadius.main};
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.neutral.light};
      margin-top: 4px;
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;

  .details {
    margin-left: 24px;

    strong {
      font-size: 22px;
      color: ${({ theme }) => theme.colors.danger.main};
      display: block;
      margin-bottom: 8px;
    }
  }
`;

export const EmptyListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.neutral.light};
    margin-top: 8px;
    text-align: center;

    strong {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

`;

export const SearchNotFoundContainer = styled.div`
  display: flex;
  align-items: flex-start;

  span {
    color: ${({ theme }) => theme.colors.neutral.light};
    margin-left: 24px;
    word-break: break-word;
  }
`;
