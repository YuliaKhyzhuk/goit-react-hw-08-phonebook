import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <NavLink> Home </NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};

export default Header;
