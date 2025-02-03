import { useState } from 'react'
import PropTypes from 'prop-types'; 
import './input.scss'

function Input({ label, placeholder, errorMessage, icon: Icon }) {
  const [inputValue, setInputValue] = useState();


  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className='input'>

      {label && <div className='input__heading'>
        <label htmlFor="input-field">{label}</label>
        {errorMessage && <div className='input__error'>{errorMessage}</div>}
      </div>}

      <div className='input__wrap'>
        <div className='input__icon'>
          {Icon && <Icon />}
        </div>
        <input 
          id="input-field" 
          value={inputValue} 
          type="number" 
          className='input__field' 
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,    
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  icon: PropTypes.elementType, 
};

export default Input;
