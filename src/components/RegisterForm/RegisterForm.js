import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-3">
        <label htmlFor="name" className={`form-label ${css.label}`}>
          Username
        </label>
        <input type="text" name="name" className="form-control" id="name" />
      </div>
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
        Register
      </button>
    </form>
  );
};
