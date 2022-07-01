import styled from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  background: ${({ theme }) => theme.colors.neutral.white};
  border: 2px solid ${({ theme }) => theme.colors.neutral.white};
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  outline: 0;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s ease-in;

  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral.light};;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }
`;
