import { Helmet } from 'react-helmet';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  return (
    <div className="container">
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h1 className="text-center mb-4">Registration</h1>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}