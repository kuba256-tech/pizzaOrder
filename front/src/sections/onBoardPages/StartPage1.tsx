import pic from '../../assets/go-start-pics/pizzaLogo.svg';

const StartPage1 = () => {
  return (
    <div className="page start-page container">
      <div className="">
        <img src={pic} alt="picture" />
        <h4>Pizza House </h4>
      </div>

      <div className="spinner-border text-white" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default StartPage1;
