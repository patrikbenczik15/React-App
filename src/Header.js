import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ text, onToggle, form }) => {
  return (
    <div className="header">
      <h1>{text}</h1>
      {form ? (
        <Button text="Close" color="red" onToggle={onToggle}></Button>
      ) : (
        <Button text="Add" color="green" onToggle={onToggle}></Button>
      )}
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  onToggle: PropTypes.func,
  form: PropTypes.bool.isRequired,
};
export default Header;
