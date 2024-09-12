import styles from "./Icons.module.css";

type PxSize = `${number}px`;
type RemSize = `${number}rem`;

interface IconProps {
  name:
    | "sword"
    | "shield"
    | "exclamation"
    | "potionRed"
    | "potionGreen"
    | "potionBlue"
    | "weaponSlot"
    | "shieldSlot"
    | "armorSlot"
    | "helmetSlot"
    | "ringSlot"
    | "potionSlot"
    | "magicSlot"
    | "shoesSlot"
    | "emptySlot";
  size?: RemSize | PxSize;
}

const Icons = ({ name, size = "64px" }: IconProps) => {
  // Aquí podrías hacer validaciones si lo necesitas
  const isValidSize = (size: string) => {
    return /^\d+(rem|px)$/.test(size); // Valida si el formato es correcto
  };

  if (!isValidSize(size)) {
    console.error("Invalid size format:", size);
    return null; // O puedes mostrar un valor por defecto
  }

  return (
    <div
      className={`${styles.icon} ${styles[name]} `}
      style={{ height: `${size}`, width: `${size}` }}
    ></div>
  );
};

export default Icons;
