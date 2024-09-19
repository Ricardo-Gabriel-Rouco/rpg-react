import { FC, PropsWithChildren } from "react";
import styles from "./List.module.css";

type Option = {
  label: string;
  value: string;
};

interface listProps {
  title?: string;
  options: Option[];
  selectedValue: Option;
  optionHandler: (value: string) => void;
  size?: string
}

const List: FC<PropsWithChildren<listProps>> = ({
  title,
  options,
  selectedValue,
  optionHandler,
  size = "5rem"
}) => {
  return (
    <>
      {title && <label htmlFor={title}>{title}</label>}
      <ul className={`${styles.rpguiListImp}`} style={{ height: `${size}` }}>
        {options.map((option, index) => (
          <li
            key={index}
            className={` ${
              selectedValue.value === option.value ? styles.rpguiSelected : ""
            }`}
            onClick={() => optionHandler(option.value)} // Manejador de clic que pasa el valor de la opción
          >
            {option.label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
