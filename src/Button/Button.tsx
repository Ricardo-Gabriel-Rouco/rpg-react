import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import { commonProps } from "../types";

const Button: FC<PropsWithChildren<commonProps>> = ({
  children,
  gold = false,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={`${styles.commonButton} ${
        gold ? styles.gold : styles.noGold
      } ${disabled && "disabled-rpg"} hover:pointCursor`}
    >
      {children}
    </button>
  );
};

export default Button;
