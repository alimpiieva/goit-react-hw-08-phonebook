import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className="nav nav-pills">
    <NavLink className={`nav-link ${css.link}`} to="/">
      Home
    </NavLink>
    {isLoggedIn && (
      <NavLink className={`nav-link ${css.link}`} to="/contacts">
        Contacts
      </NavLink>
    )}
  </nav>
  );
};
