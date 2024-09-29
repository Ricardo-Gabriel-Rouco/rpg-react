import { PxSize, RemSize, Option } from "./specialTypes";

export interface commonProps {
  gold?: boolean | null;
  disabled? : boolean | null 
}

export interface checkBox extends commonProps {
  type?: "radio" | "checkbox";
  html: string;
  name?: string;
}

export interface container {
  type?: "framed" | "golden" | "shinny" | "grey";
}

export interface dropdown {
  values: string[];
  selectedOption: string;
  onChangeOption: (value: string) => void; // Updated signature
}

export interface icons {
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

export interface inputs {
  label: string;
  name: string;
  type?: "text" | "textarea";
  changeFunction?: () => void;
  value?: string;
}

export interface lists {
  title?: string;
  options: Option[];
  selectedValue: Option;
  optionHandler: (value: string) => void;
  size?: string;
}

export interface progress {
  color?: "red" | "blue" | "green";
  value?: number;
  max?: number;
}

export interface sliders extends commonProps {
  value: number;
  step: number;
  min: number;
  max: number;
  onChange: (e: any) => void;
}

export interface paragraphs {
    type?:
    | "text"
    | "title1"
    | "title2"
    | "title3"
    | "title4"
    | "link"
    | "label"
    | "list"
    | "span";
  url?: string
}