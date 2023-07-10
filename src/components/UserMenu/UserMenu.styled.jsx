import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const UserMenuCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  align-items: center;
  gap: 5px;
`;

export const Btn = styled(Button)`
  background-color: #ffffff;
  color: #1976d2;
  border: 1px solid #ffffff;
  font-size: 10px;
  padding: 2px 3px;
  width: 100%;

  :hover {
    color: #ffffff;
    background-color: #f57433;
    border-color: #f57433;
  }
`;
