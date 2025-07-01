import React, { useState } from 'react';
import InputData from '../../components/inputData/InputData';
import { useNavigate } from 'react-router-dom';
import type { IRegisterMutation } from '../../types';
import { useAppDispatch } from '../../app/hooks';
import { register } from './usersThunk';

const initialState: IRegisterMutation = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  image: null,
};

const RegisterSection = () => {
  const [userData, setUserData] = useState(initialState);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await dispatch(register(userData)).unwrap();
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-singin-page container">
      <div className="login-singin-page-top">
        <button></button>
        <h4>Register</h4>
      </div>
      <span>Fill the details and Create New Account</span>
      <form onSubmit={onSubmit}>
        <InputData title="name" name="name" type="text" onChange={onChangeInput} />
        <InputData title="email" name="email" type="text" onChange={onChangeInput} />
        <InputData title="password" name="password" type="password" onChange={onChangeInput} />
        <InputData title="confirm Password" name="confirmPassword" type="password" onChange={onChangeInput} />
        {/* <FileInput name='ge' label="image" onGetFile={()=>console.log("sd")}/> */}
        <div className="check-box-form">
          <input
            id="check-box-input"
            name="check-box-input"
            autoComplete="off"
            type="checkbox"
            className="check-box-input"
          />
          <label htmlFor="check-box-input">
            <span>
              I agree to the <a href="#">Terms and Services</a> and <a href="#">Privacy Policy</a>
            </span>
          </label>
        </div>
        <button type="submit" className="button-component with-reg mt-auto">
          Sign up
        </button>
      </form>
      <span>
        Have Account ?{' '}
        <a href="#" onClick={() => navigate('/login')}>
          Login
        </a>
      </span>
    </div>
  );
};

export default RegisterSection;
