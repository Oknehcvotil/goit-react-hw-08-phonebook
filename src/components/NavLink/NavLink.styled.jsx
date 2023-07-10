import styled from '@emotion/styled';
import { NavLink as BaseLink } from 'react-router-dom';

export const Link = styled(BaseLink)`
  margin-right: 10px;
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  transition: color 0.3s ease;

  :last-child {
    margin-right: 0;
  }

  :hover,
  :focus,
  &.active {
    color: #f57433;
  }
`;
