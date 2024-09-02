import styles from './Dropdown.module.css';
import { useState } from 'react';

function Dropdown({ children, options, updateFunction, updateState }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(updateState?.[0] || ''); // Handle initial selection

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (updateFunction) updateFunction(value); // Call update function if provided
  };

  return (
    <div className={`rpgui-content`}>
      <label htmlFor="">Header</label>
      <button type="button" onClick={handleToggle}>
        {selectedValue || 'Select'} {isOpen ? '▴' : '▾'}
      </button>
      {isOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;