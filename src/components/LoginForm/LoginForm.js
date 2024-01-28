import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={`mb-3 ${css.form}`} onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label htmlFor="email" className={`form-label ${css.label}`}>
          Email
        </label>
        <input type="email" name="email" className="form-control" id="email" />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className={`form-label ${css.label}`}>
          Password
        </label>
        <input type="password" name="password" className="form-control" id="password" />
      </div>
      <button type="submit" className="btn btn-primary">
        Log In
      </button>
    </form>
  );
};
