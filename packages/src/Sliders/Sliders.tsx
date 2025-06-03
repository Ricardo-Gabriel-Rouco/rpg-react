import { FC } from "react";
import styles from "./Sliders.module.css";
import { sliders } from "../types";

const Slider: FC<sliders> = ({ value, step, min, max, gold, onChange }) => {
  return (
    <div
      className={gold ? styles.sliderContainerGolden : styles.sliderContainer}
    >
      <div
        className={gold ? styles.sliderLeftEdgeGolden : styles.sliderLeftEdge}
      />
      <input
        className={gold ? styles.sliderInputGolden : styles.sliderInput}
        type="range"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
      />
      <div
        className={gold ? styles.sliderRightEdgeGolden : styles.sliderRightEdge}
      />
    </div>
  );
};

export default Slider;
