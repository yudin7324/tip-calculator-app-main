import PropTypes from 'prop-types'; 
import './input.scss';

function Input({ 
  id,
  label, 
  placeholder, 
  isError, 
  errorMessage, 
  icon: Icon, 
  value, 
  onChange,
  maxLength,
  isCustomField
}) {
  function handleChange(event) {
    let newValue = event.target.value.replace(',', '.');

    if (/^\d*\.?\d{0,2}$/.test(newValue) && newValue.length <= maxLength) {
      onChange(newValue);
    }
  }

  return (
    <div className={`input ${isError ? 'error' : ''} ${isCustomField ? 'custom' : ''}`}>
      {label && (
        <div className='input__heading'>
          <label className='input__label' htmlFor={id}>{label}</label>
          {errorMessage && <div className='input__error'>{errorMessage}</div>}
        </div>
      )}

      <div className='input__wrap'>
        {Icon && <div className='input__icon'><Icon /></div>}
        <input 
          id={id}
          value={value} 
          type="text" 
          className='input__field' 
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  label: PropTypes.string,    
  placeholder: PropTypes.string,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  icon: PropTypes.elementType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), 
  onChange: PropTypes.func.isRequired,
  maxLength: PropTypes.number,
  isCustomField: PropTypes.bool,
};

export default Input;
