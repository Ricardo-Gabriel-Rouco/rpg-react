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
    <div>
      <button
        className={`${styles.commonButton} ${
          golden ? styles.gold : styles.noGold
        }`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
