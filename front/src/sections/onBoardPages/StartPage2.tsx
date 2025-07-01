import onBoardPage1 from '../../assets/go-start-pics/page-1-pic.svg';

const StartPage2 = () => {
  return (
    <div className="page start-page container">
      <div className="home-screen-content">
        <p>Welcome to</p>
        <h4>Pizza House </h4>
        <span>Our chefs are working 24/7 and are ready to accept visitors and at any time fo the day and night.</span>
      </div>
      <div className="home-screen-pic mt-auto">
        <img src={onBoardPage1} alt="onBoardPage" />
      </div>
    </div>
  );
};

export default StartPage2;
