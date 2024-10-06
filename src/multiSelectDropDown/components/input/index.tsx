import styles from "./style.module.scss";
import { KeyboardEvent } from "react";
import { TInputProps } from "@/multiSelectDropDown/types";

export const Input = ({ onFocus, onSubmit }: TInputProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputElement = e.currentTarget;
      onSubmit(inputElement.value);
      inputElement.value = "";
    }
  };

  return (
    <input className={styles.input} onFocus={onFocus} onKeyUp={handleKeyUp} />
  );
};
