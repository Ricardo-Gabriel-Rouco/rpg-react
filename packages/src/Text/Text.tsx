import { FC, PropsWithChildren } from "react";
import styles from "./Text.module.css";
import { paragraphs } from "../types";

const Text: FC<PropsWithChildren<paragraphs>> = ({
  children,
  type = "text",
  url,
}) => {
  switch (type) {
    case "text":
      return <p className={styles.text}>{children}</p>;

    case "title1":
      return <h1 className={styles.title2}>{children}</h1>;

    case "title2":
      return <h2 className={styles.title2}>{children}</h2>;

    case "title3":
      return <h3 className={styles.title3}>{children}</h3>;

    case "title4":
      return <h4 className={styles.title4}>{children}</h4>;

    case "label":
      return <label className={styles.label}>{children}</label>;

    case "link":
      return (
        <a href={url} className={styles.link}>
          {children}
        </a>
      );

    case "list":
      return <li className={styles.list}>{children}</li>;

    case "span":
      return <span className={styles.span}>{children}</span>;

    default:
      break;
  }
};

export default Text;
