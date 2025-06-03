import { FC } from "react";
import styles from "./Hr.module.css";
import { commonProps } from "../types";

const Hr: FC<commonProps> = ({ gold = false }) => {
  return <hr className={`${gold ? styles.golden : styles.regular} w-64`} />;
};

export default Hr;
