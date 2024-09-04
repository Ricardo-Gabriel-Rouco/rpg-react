import { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface buttonProps {
  golden?: boolean | null;
}

const Button: FC<PropsWithChildren<buttonProps>> = ({
  children,
  golden = false,
}) => {
  return (
    <button
      className={`${styles.commonButton} ${
        golden ? styles.gold : styles.noGold
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
