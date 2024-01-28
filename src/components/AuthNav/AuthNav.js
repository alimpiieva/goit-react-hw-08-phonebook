import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className="nav nav-pills">
    <NavLink className={`nav-link ${css.link}`} to="/register">
      Register
    </NavLink>
    <NavLink className={`nav-link ${css.link}`} to="/login">
      Log In
    </NavLink>
  </div>
  );
};
