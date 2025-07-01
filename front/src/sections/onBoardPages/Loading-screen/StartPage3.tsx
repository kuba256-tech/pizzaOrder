interface IGetStartedState {
  index: number;
  img: string;
  contentTitle: string;
  contentText: string;
  buttonText: string;
  nextPageButton: VoidFunction;
}

const StartPage3: React.FC<IGetStartedState> = ({
  img,
  contentTitle,
  contentText,
  buttonText,
  nextPageButton,
  index,
}) => {
  return (
    <div className="page continue-page container">
      <div className="continue-page-content">
        <img src={img} alt={img} />
        <h4>{contentTitle}</h4>
        <p>{contentText}</p>
      </div>
      <div
        className="progress w-75"
        role="progressbar"
        aria-label="Animated striped example"
        aria-valuenow={20}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          style={{ width: `${index * 25}%` }}
        ></div>
      </div>

      <button className="button-component" onClick={() => nextPageButton()}>
        {buttonText}
      </button>
    </div>
  );
};

export default StartPage3;
