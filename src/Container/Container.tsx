import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";

interface checkProps {
  type?: "framed" | "golden" | "shinny" | "grey";
}

const Container: FC<PropsWithChildren<checkProps>> = ({
  children,
  type = "framed",
}) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
        {children}
    </div>
  );
};

export default Container;
