import { FC, PropsWithChildren } from "react";
import styles from "./List.module.css";
import { lists } from "../types";

const List: FC<PropsWithChildren<lists>> = ({
  title,
  options,
  selectedValue,
  optionHandler,
  size = "10rem",
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
