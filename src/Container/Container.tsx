import { FC, PropsWithChildren } from "react";
import styles from "./Container.module.css";
import { container } from "../types";

const Container: FC<PropsWithChildren<container>> = ({
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
