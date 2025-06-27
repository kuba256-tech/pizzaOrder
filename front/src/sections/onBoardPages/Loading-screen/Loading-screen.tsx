import { useEffect, useState } from 'react';
import getStartedPic1 from '../../../assets/go-start-pics/page-2-pic.svg';
import getStartedPic2 from '../../../assets/go-start-pics/page-3-pic.svg';
import StartPage1 from './StartPage1';
import StartPage2 from './StartPage2';
import StartPage3 from './StartPage3';

const LoadingScreen = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index < 2) {
        setIndex((prevState) => prevState + 1);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [index]);

  const nextPageButton = () => {
    setIndex((prevState) => prevState + 1);
  };

  return (
    <div className="pages" style={{ transform: `translateX(-${index * 100}vw)` }}>
      <StartPage1 />
      <StartPage2 />
      <StartPage3
        index={index}
        img={getStartedPic1}
        contentTitle="Get Delivered at your door step"
        contentText="Your food at your door step and just click on one step"
        buttonText="next"
        nextPageButton={nextPageButton}
      />
      <StartPage3
        index={index}
        img={getStartedPic2}
        contentTitle="Pick Up Delivery at your door and enjoy"
        contentText="Your food at your door step and just click on one step"
        buttonText="Get Started"
        nextPageButton={nextPageButton}
      />
    </div>
  );
};

export default LoadingScreen;
