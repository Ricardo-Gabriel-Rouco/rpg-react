import { FC, PropsWithChildren, useState } from "react";
import styles from "./Dropdown.module.css";

interface dropProps {
  values: string[];
  nameFor: string;
  selectedOption: string;
  onChangeOption: (value: string) => void; // Updated signature
}

const Dropdown: FC<PropsWithChildren<dropProps>> = ({
  values,
  selectedOption,
  onChangeOption,
  nameFor,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  const handleClick = () => setIsOpen(!isOpen);

  const handleOptionChange = (value: string) => {
    onChangeOption(value);
    setIsOpen(false); // Close dropdown on selection
  };

  return (
    <div className={styles.dropdown}>
      <div
        onClick={handleClick}
        className={`${styles.dropdownTrigger} ${styles.rpguiDropdownSize} ${styles.rpguiDropdownBorder} ${styles.rpguiDropdownBackground} ${styles.rpguiDropdownFont}`}
      >
        <span className={styles.dropdownArrow}>&#9660;</span> {/* Down arrow */}
        {selectedOption} {/* Display selected option */}
      </div>
      {isOpen && (
        <ul
          className={`${styles.dropdownMenu} ${styles.rpguiDropdownBackground} ${styles.rpguiDropdownBorder}`}
        >
          {values.map((value) => (
            <li
              key={value}
              className={`${styles.dropdownItem} ${styles.rpguiDropdownOptionPadding} ${styles.rpguiDropdownFont}`}
              onClick={() => handleOptionChange(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      )}
      {children} {/* Render any optional content within the dropdown */}
    </div>
  );
};

export default Dropdown;
