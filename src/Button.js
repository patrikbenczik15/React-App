import PropTypes from "prop-types";

const Button = ({ text, color, onToggle }) => {
  return (
    <button
      onClick={() => onToggle()}
      style={{ background: color }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
};
export default Button;
