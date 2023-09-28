/* eslint-disable react/prop-types */
import './button.css';

function Button({ text, onClick }) {
  return (
    <div>
      <button type="button" className="cust-button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Button;
