import { FC, PropsWithChildren } from "react";
import styles from "./Input.module.css"

interface inputProps {
  label: string;
  name: string;
  type?: "text" | "textarea";
  changeFunction?: () => void;
  value? : string
}

const Input: FC<PropsWithChildren<inputProps>> = ({
  label,
  name,
  type = "text",
  changeFunction,
  value

}) => {
  return (
    <div >
      <label htmlFor={label}>{label}</label>
      <input className={styles.rpgInput} type={type} name={name}  onChange={changeFunction && changeFunction} value={value && value} />
    </div>
  );
};

export default Input;
