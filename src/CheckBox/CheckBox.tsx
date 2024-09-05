import { FC, PropsWithChildren } from "react";
import styles from "./CheckBox.module.css";

interface checkProps {
  type?: "radio" | "checkbox";
  gold?: boolean;
  html: string;
}

const CheckBox: FC<PropsWithChildren<checkProps>> = ({
  children,
  type = "checkbox",
  gold = false,
  html,
}) => {
  return (
    <>
      <input
        type={type}
        className={`${styles.commonInput} ${
          gold ? styles.golden : styles.regular
        }`}
        id={html} // Add id attribute for accessibility
      />
      <label htmlFor={html}>{children}</label>
    </>
  );
};

export default CheckBox;
