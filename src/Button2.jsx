const Button2 = ({ buttonTitle, buttonColor, onClick }) => {
    return (
      <div
        onClick={onClick}
        className="my-button"
        style={{
          backgroundColor: buttonColor,
        }}
      >
        {buttonTitle}
      </div>
    );
  };
  
  export default Button2;