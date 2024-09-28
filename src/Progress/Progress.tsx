import { FC } from "react";
import styles from "./Progress.module.css";
import { progress } from "../types";

const Progress: FC<progress> = ({
  value = 1,
  max = 10,
  color,
}) => {
  // Calcular el ancho del relleno basado en el valor y el máximo
  const fillWidth = (value / max) * 100;

  return (
    // className={styles.rpguiProgress}
    <div className={styles.rpguiProgress}>
      <div className={styles.rpguiProgressLeftEdge}></div>
      <div className={styles.rpguiProgressTrack}>
        <div
          className={`${styles.rpguiProgressFill} ${color ? styles[color] : ""}`}
          style={{ width: `${fillWidth}%` }} // Establecer el ancho dinámicamente
        ></div>
      </div>
      <div className={styles.rpguiProgressRightEdge}></div>
    </div>
  );
};

export default Progress;
