import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: center;
`;



export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const LoginNavContainer = styled.div`
  display: flex;
//   justify-content: flex-end;
  gap: 16px;
//   align-items: center;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: large;
  text-shadow: ${props => {
    return ` 0 1px 1px ${props.theme.colors.secondaryAccent}`;
  }};
`;
