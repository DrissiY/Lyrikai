import React, { useState } from 'react';

const InputDropdown = ({ options, onSelect }) => {
  const [selectedValue, setSelectedValue] = useState(options[0]); // Set initial value

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    onSelect(event.target.value); // Call callback with selected value
  };

  return (
    <div>
      <select value={selectedValue} onChange={handleChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputDropdown;
