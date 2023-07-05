import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  :last-child {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const Btn = styled.button`
  background-color: #e53935;
  color: black;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 200ms;
  :hover,
  :focus {
    background-color: #c62828;
    color: white;
  }
`;
