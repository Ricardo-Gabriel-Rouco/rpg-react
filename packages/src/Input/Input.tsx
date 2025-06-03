import { FC, PropsWithChildren } from "react";
import styles from "./Input.module.css"
import { inputs } from "../types";

const Input: FC<PropsWithChildren<inputs>> = ({
  label,
  name,
  type = "text",
  changeFunction,
  value

}) => {
  return (
    <div >
      <label htmlFor={label}>{label}</label>
      <input className={`${styles.rpgInput} selectCursor`} type={type} name={name}  onChange={changeFunction && changeFunction} value={value && value} />
    </div>
  );
};

export default Input;
