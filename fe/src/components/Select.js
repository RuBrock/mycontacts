import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.neutral.white};
  border: 2px solid ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  box-shadow: ${({ theme }) => theme.boxShadow.main};
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;
  appearance: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.light};;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  &[disabled] {
    background-color: ${({ theme }) => theme.colors.neutral.lighter};
    border-color: ${({ theme }) => theme.colors.neutral.light};
    opacity: 1;
  }
`;
