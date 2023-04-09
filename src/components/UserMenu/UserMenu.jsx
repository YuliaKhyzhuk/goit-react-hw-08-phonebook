import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

import Button from '@mui/material/Button';

import { UserMenuContainer } from './UserMenu.styled';


export const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <UserMenuContainer>
      <p>{user.email}</p>
      <Button type="button" variant="contained" color="success" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </UserMenuContainer>
  );
};

export default UserMenu;
