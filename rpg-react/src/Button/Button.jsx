import styles from "./Button.module.css";
function Button({ children, gold, buttonType }) {
  return (
    <div className="rpgui-content">
      <button
        type={buttonType ? buttonType : "button"}
        style={styles}
        className={`rpgui-button ${gold ? "golden" : ""}`}
      >
        {children}
      </button>
    </div>
  );
}

export default Button;
