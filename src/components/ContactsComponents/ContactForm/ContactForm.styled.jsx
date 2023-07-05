import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Input = styled.input`
  color: #383737;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  :valid {
    border-color: #4caf50;
  }
  :invalid {
    border-color: #ff0000;
  }
`;

export const Btn = styled.button`
  background-color: #4caf50;
  color: black;
  border: none;
  padding: 10px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  :hover,
  :focus {
    background-color: #45a049;
    color: white;
  }
`;
