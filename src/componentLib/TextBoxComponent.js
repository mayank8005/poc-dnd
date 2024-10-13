import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TextBoxComponent = ({ initialValue, onChange, placeholder, label, id }) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="text-box-container">
      {label && <label htmlFor={id}>{label}</label>}
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-box-input"
      />
    </div>
  );
};

TextBoxComponent.propTypes = {
  initialValue: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
};

TextBoxComponent.defaultProps = {
  initialValue: '',
  placeholder: '',
  label: '',
  onChange: null,
};

export default TextBoxComponent;
