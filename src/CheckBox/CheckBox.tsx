import { FC, InputHTMLAttributes } from "react";
import { cn } from "../lib/utils";

type CheckProps = InputHTMLAttributes<HTMLInputElement> & {
  gold?: boolean;
  label?: string;
};

const CheckBox: FC<CheckProps> = ({
  type = "checkbox",
  gold = false,
  label,
  id,
  name,
  disabled,
  className,
  ...props
}) => {
  const inputId = id || crypto.randomUUID();
  const baseInputClass = "hidden peer";

  const labelClass = cn(
    "inline-block leading-6 pl-9 h-6 my-3 cursor-pointer select-none",
    gold
      ? type === "radio"
        ? "peer-checked:bg-[url('/radio-golden-on.png')] bg-[url('/radio-golden-off.png')]"
        : "peer-checked:bg-[url('/checkbox-golden-on.png')] bg-[url('/checkbox-golden-off.png')]"
      : type === "radio"
        ? "peer-checked:bg-[url('/radio-on.png')] bg-[url('/radio-off.png')]"
        : "peer-checked:bg-[url('/checkbox-on.png')] bg-[url('/checkbox-off.png')]",
    "bg-no-repeat bg-[length:auto_100%]",
    disabled && "opacity-50 cursor-not-allowed",
    className,
  );

  return (
    <span className="inline-block">
      <input
        type={type}
        id={inputId}
        name={name}
        disabled={disabled}
        className={baseInputClass}
        {...props}
      />
      <label htmlFor={inputId} className={labelClass}>
        {label}
      </label>
    </span>
  );
};

export default CheckBox;
