import { FC, PropsWithChildren } from "react";
import { cn } from "../lib/utils"; // usa el helper cn de shadcn (envuelve clsx)

type ContainerType = "framed" | "golden" | "shinny" | "grey";

interface ContainerProps {
  type?: ContainerType;
  className?: string;
}

const Container: FC<PropsWithChildren<ContainerProps>> = ({
  children,
  type = "framed",
  className,
}) => {
  const baseStyles =
    "z-10 w-full overflow-visible hover:customCursor box-border p-3 border-[15px] bg-center bg-repeat";

  const variantStyles: Record<ContainerType, string> = {
    framed:
      "border-[15px] border-[image:var(--border-framed)] bg-[image:var(--bg-framed)] border-[image-repeat:repeat]",
    golden:
      "border-[15px] border-[image:var(--border-golden)] bg-[image:var(--bg-golden)] border-[image-slice:4] border-[image-repeat:repeat]",
    shinny:
      "border-[15px] [border-image-source:url('/border-image-golden2.png')] bg-[image:var(--bg-shinny)] border-[image-slice:6] border-[image-repeat:repeat]",
    grey: `border-[7px] border-image-[url('/border-image-grey.png')] bg-[image:var(--bg-grey)] border-[image-slice:3] border-[image-repeat:repeat]`,
  };

  return (
    <div className={cn(baseStyles, variantStyles[type], className)}>
      {children}
    </div>
  );
};

export default Container;
