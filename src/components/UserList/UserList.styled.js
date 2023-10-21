import styled from 'styled-components';

export const StyledList = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  & > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;