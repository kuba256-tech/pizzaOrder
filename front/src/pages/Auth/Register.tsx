import InputData from '../../components/inputData/InputData';

const RegisterSection = () => {
  return (
    <div className="login-singin-page container">
      <div className="login-singin-page-top">
        <button></button>
        <h4>Register</h4>
      </div>
      <span>Fill the details and Create New Account</span>
      <form>
        <InputData title="name" />
        <InputData title="email" />
        <InputData title="password" />
        <InputData title="confrim" />

        <button className="button-component with-reg mt-auto">Sign up</button>
      </form>
      <span>
        I agree to the <a href="#">Terms and Services</a> and <a href="#"> Privacy Policy</a>
      </span>
    </div>
  );
};

export default RegisterSection;
