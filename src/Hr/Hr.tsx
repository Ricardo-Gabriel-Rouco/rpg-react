import { FC } from "react";
import styles from "./Hr.module.css";

interface hrProps {
    golden?: boolean
}

const Hr: FC<hrProps> = ({golden = false}) => {
  return <hr className={`${golden ? styles.golden : styles.regular } w-64`}/>;
};

export default Hr;
