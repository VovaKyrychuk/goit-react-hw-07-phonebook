import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 5px;
  padding: 3px;
  max-width: 100%;
  width: 400px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: bold;
  gap: 8px;
  max-width: 100%;
  width: 400px;
  color: ${props => props.theme.colors.black};
  margin-top: 10px;
`;

export const FormInput = styled.input`
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 5px;
  padding-right: 5px;
  max-width: 100%;
  width: 400px;
  border: 1px solid ${props => props.theme.colors.black};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.muted};
  font-size: 14px;
`;

export const Button = styled.button`
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
