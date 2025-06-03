import { FC, ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";
import { cn } from "../lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  gold?: boolean;
};

const buttonVariants = cva(
  "inline-block bg-transparent bg-no-repeat border-none outline-none bg-clip-padding bg-origin-padding bg-center bg-cover max-w-full min-w-[140px] min-h-[60px] px-9 text-base relative",
  {
    variants: {
      gold: {
        true: "bg-[url('/button-golden.png')] bg-[length:100%_80%] overflow-visible",
        false: "bg-[url('/button.png')] bg-[length:100%_100%] pt-0",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      gold: false,
      disabled: false,
    },
  },
);

const Button: FC<ButtonProps> = ({
  gold = false,
  disabled = false,
  className,
  children,
  ...props
}) => {
  return (
    <button
      disabled={disabled}
      className={cn(buttonVariants({ gold, disabled }), className, {
        "hover:bg-[url('/button-hover.png')]": !gold,
        "active:bg-[url('/button-down.png')]": !gold,
        "hover:bg-[url('/button-golden-hover.png')]": gold,
        "active:bg-[url('/button-golden-down.png')]": gold,
      })}
      {...props}
    >
      {gold && (
        <>
          <span className="absolute left-0 top-1/2 -translate-y-1/2 -ml-[10px] w-[34px] h-[110%] bg-[url('/button-golden-left.png')] bg-center bg-cover pointer-events-none" />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 -mr-[10px] w-[34px] h-[110%] bg-[url('/button-golden-right.png')] bg-center bg-cover pointer-events-none" />
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
