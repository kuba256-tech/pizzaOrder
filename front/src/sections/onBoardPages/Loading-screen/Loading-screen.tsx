import pic from '../../../assets/go-start-pics/pizzaLogo.svg';
import onBoardPage1 from '../../../assets/go-start-pics/page-1-pic.svg';
import { useEffect, useState } from 'react';

const page1 = (
  <div className="slide">
    <div className="loading-screen-content">
      <img src={pic} alt="picture" />
      <h4>Pizza House </h4>
    </div>
    <div className="loader">
      <div className="spinner-border text-white" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

const page2 = (
  <div className="slide">
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

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    { id: 1, slide: page1 },
    { id: 2, slide: page2 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index === 0) {
        setIndex(1);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="loading-screen slider-wrapper">
      <div className="slide-container" style={{ transform: `translateX(-${index * 100}%)` }}>
        {page1}
        {page2}
      </div>
    </div>
  );
};

export default LoadingScreen;
