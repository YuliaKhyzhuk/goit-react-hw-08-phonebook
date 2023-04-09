import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

import {
  HeaderContainer,
  NavContainer,
  StyledLink,
  LoginNavContainer,
} from './Header.styled';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <HeaderContainer>
        <NavContainer>
          <StyledLink to="/"> Home </StyledLink>
          {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
        </NavContainer>
        <LoginNavContainer>
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* <Outlet /> */}
        </LoginNavContainer>
      </HeaderContainer>
    </>
  );
};

export default Header;
