import { useNavigate } from 'react-router-dom';
import InputData from '../../components/inputData/InputData';
import { signInWithElements } from '../../GlobalConstant';
import { useState } from 'react';
import type { ILoginMutation } from '../../types';

const initialState = {
  email: '',
  password: '',
};

const LoginSection = () => {
  const [userForm, setUserForm] = useState<ILoginMutation>(initialState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userForm);
  };

  const navigate = useNavigate();
  return (
    <div className="login-singin-page container">
      <div className="login-singin-page-top">
        <button></button>
        <h4>Let's Sign you in</h4>
      </div>
      <span>Enter registered name to Sign in</span>
      <form onSubmit={onSubmit}>
        <InputData title="email" name="email" type="text" onChange={onChange} />
        <InputData title="password" name="password" type="password" onChange={onChange} />
        <div className="sign-with">
          <span>Or Sign up with</span>
          <div className="sign-with-element">
            {signInWithElements.map((item, index) => (
              <img key={index} src={item.icon} alt={item.title} />
            ))}
          </div>
        </div>
        <button type="submit" className="button-component with-reg mt-auto">
          Sign in
        </button>
      </form>
      <span>
        Don't have an account?{' '}
        <a href="#" onClick={() => navigate('/register')}>
          Register
        </a>
      </span>
    </div>
  );
};

export default LoginSection;
