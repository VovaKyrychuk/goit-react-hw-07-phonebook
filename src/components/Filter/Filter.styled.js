import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
  margin-top: 5px;
  font-weight: bold;
  margin-top: 10px;
`;

export const Input = styled.input`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 100%;
  width: 400px;
  border: 0;
  outline: 0;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.muted};
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 10px;
`;
