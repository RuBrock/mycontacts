import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 48px; */
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    background: ${({ theme }) => theme.colors.neutral.white};
    border: none;
    border-radius: 25px;
    padding: 0 16px;
    box-shadow: ${({ theme }) => theme.boxShadow.main};
    outline: 0;

    &::placeholder {
      color: ${({ theme }) => theme.colors.neutral.light};
    }
  }
`;
