import PropTypes from "prop-types";

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      className={buttonText === reqType ? "selected" : null}
      type="button"
      onClick={() => setReqType(buttonText)}
    >
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  reqType: PropTypes.string.isRequired,
  setReqType: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button;
