import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import {commonProps} from "../types"

const Button: FC<PropsWithChildren<commonProps>> = ({
  children,
  gold = false,
}) => {
  return (
      <button
        className={`${styles.commonButton} ${
          gold ? styles.gold : styles.noGold
        } disabled-rpg`}
      >
        {children}
      </button>
  );
};

export default Button;
