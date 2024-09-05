import { FC, PropsWithChildren, useState } from "react";

interface dropProps {
  values: string[];
  selectedOption: string;
  onChangeOption: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Dropdown: FC<PropsWithChildren<dropProps>> = ({
  values,
  selectedOption,
  onChangeOption,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      {" "}
      {/* Add a wrapper class for styling */}
      {/* <button onClick={handleToggle}>{selectedOption}</button> Display the selected option */}
      {isOpen && (
        <select onChange={onChangeOption}>
          {values.map((value) => (
            <option
              key={value}
              value={value}
              selected={value === selectedOption}
            >
              {value}
            </option>
          ))}
        </select>
      )}
      {children} {/* Render any optional content within the dropdown */}
    </div>
  );
};

export default Dropdown;
