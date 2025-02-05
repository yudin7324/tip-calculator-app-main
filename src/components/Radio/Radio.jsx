import PropTypes from 'prop-types';
import './radio.scss';

function Radio({ text, value, checked, onChange }) {
  return (
    <label className="radio">
      <span className='radio__text'>{text}</span>
      <input 
        className="radio__field" 
        type="radio" 
        name="tip" 
        value={value} 
        checked={checked} 
        onChange={() => onChange(value)} 
      />
    </label>
  );
}

Radio.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Radio;
