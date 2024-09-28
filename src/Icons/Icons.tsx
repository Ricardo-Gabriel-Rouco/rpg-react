import { FC } from "react";
import { icons } from "../types";
import styles from "./Icons.module.css";

const Icons: FC<icons> = ({ name, size = "64px" }) => {
  // Aquí podrías hacer validaciones si lo necesitas
  const isValidSize = (size: string) => {
    return /^\d+(rem|px)$/.test(size); // Valida si el formato es correcto
  };

  if (!isValidSize(size)) {
    console.error("Invalid size format:", size);
    return null; // O puedes mostrar un valor por defecto
  }

  return (
    <div
      className={`${styles.icon} ${styles[name]} `}
      style={{ height: `${size}`, width: `${size}` }}
    ></div>
  );
};

export default Icons;
