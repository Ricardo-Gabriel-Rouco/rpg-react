import { FC, PropsWithChildren } from "react";
import styles from "./CheckBox.module.css";
import { checkBox } from "../types";

const CheckBox: FC<PropsWithChildren<checkBox>> = ({
  children,
  type = "checkbox",
  gold = false,
  html,
  name,
  disabled,
}) => {
  return (
    <>
      <input
        type={type}
        className={`${styles.commonInput} ${
          gold ? styles.golden : styles.regular
        } ${disabled && "disabled-rpg"}`}
        id={html}
        name={name}
      />
      <label className="hover:pointCursor" htmlFor={html}>{children}</label>
    </>
  );
};

export default CheckBox;
