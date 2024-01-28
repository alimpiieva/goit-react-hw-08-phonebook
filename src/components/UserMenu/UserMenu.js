import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className="dropdown btn-group">
    <p className={css.username}>Welcome, {user.name}</p>
    <button
      type="button"
      onClick={() => dispatch(logOut())}
      className="btn btn-secondary rounded"
    >
        Logout
      </button>
    </div>
  );
};
