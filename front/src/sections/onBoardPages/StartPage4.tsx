import finalPic4 from '../../assets/go-start-pics/page-4-pic.svg';
import arrowLeft from '../../assets/go-start-pics/page-4-arrow-left.svg';
import pizzaLogo from '../../assets/go-start-pics/pizzaLogo.svg';
import { useNavigate } from 'react-router-dom';

export interface IGetStartedState {
  index: number;
}

const StartPage4: React.FC<IGetStartedState> = ({ index }) => {
  const navigate = useNavigate();
  return (
    <div className="continue-page page container">
      <div className="final-page-top">
        <img className="arrowPic" src={arrowLeft} alt="arrowLeft" />
        <img className="logoPic" src={pizzaLogo} alt="pizzaLogo" />
      </div>
      <div className="final-page-content">
        <img src={finalPic4} alt="" />
        <div
          className="progress w-75"
          role="progressbar"
          aria-label="Animated striped example"
          aria-valuenow={20}
          aria-valuemin={10}
          aria-valuemax={100}
        >
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            style={{ width: `${index * 25}%` }}
          ></div>
        </div>
      </div>
      <div className="final-page-footer">
        <button className="button-component with-reg" onClick={() => navigate('/login')}>
          sign in
        </button>
        <button className="button-component with-reg" onClick={() => navigate('/register')}>
          register
        </button>
      </div>
    </div>
  );
};

export default StartPage4;
