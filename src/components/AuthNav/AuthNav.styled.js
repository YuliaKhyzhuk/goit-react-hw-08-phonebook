import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  font-size: large;
  text-shadow: ${props => {
    return ` 0 1px 1px ${props.theme.colors.secondaryAccent}`;
  }};
`;
