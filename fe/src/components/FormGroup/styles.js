import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    margin-top: 8px;
    display: block;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      right: 16px;
      top: 18px
    }
  }
`;
