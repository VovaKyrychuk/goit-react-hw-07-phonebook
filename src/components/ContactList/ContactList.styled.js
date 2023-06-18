import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 4px;
  padding-right: 4px;
  max-width: 100%;
  width: 400px;
`;
export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  color: ${p => p.theme.colors.accent};
`;

export const ListBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 100%;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 8px;
  background-color: ${p => p.theme.colors.gray};
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.black};
    color: ${p => p.theme.colors.white};

    :active {
      color: ${p => p.theme.colors.accent};
    }
  }
`;
