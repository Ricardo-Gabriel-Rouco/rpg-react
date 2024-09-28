import { FC } from "react";
import styles from "./Sliders.module.css";

interface sliderProps {
  value: number;
  step: number;
  min: number;
  max: number;
  onChange: (e: any) => void;
  golden: boolean;
}

const Slider: FC<sliderProps> = ({
  value,
  step,
  min,
  max,
  golden,
  onChange,
}) => {
  return (
    <div
      className={golden ? styles.sliderContainerGolden : styles.sliderContainer}
    >
      <div
        className={golden ? styles.sliderLeftEdgeGolden : styles.sliderLeftEdge}
      />
      <input
        className={golden ? styles.sliderInputGolden : styles.sliderInput}
        type="range"
        value={value}
        step={step}
        min={min}
        max={max}
        onChange={onChange}
      />
      <div
        className={
          golden ? styles.sliderRightEdgeGolden : styles.sliderRightEdge
        }
      />
    </div>
  );
};

export default Slider;
