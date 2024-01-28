import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={`navbar navbar-light ${css.header}`}>
    <Navigation />
    {isLoggedIn ? <UserMenu /> : <AuthNav />}
  </header>
  );
};
