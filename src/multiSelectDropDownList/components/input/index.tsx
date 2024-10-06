import styles from "./style.module.scss";
import Image from "next/image";
import arrowSvg from "../../icons/down_arrow.svg";
import { KeyboardEvent } from "react";
import { TInputProps } from "../../types";

export const Input = ({ isOpen, onFocus, onSubmit }: TInputProps) => {
  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const inputElement = e.currentTarget;
      onSubmit(inputElement.value);
      inputElement.value = "";
    }
  };

  return (
    <div className={`${styles.container} ${isOpen ? styles.open : ""}`}>
      <Image
        className={styles.arrowIcon}
        src={arrowSvg}
        width={20}
        height={20}
        alt="arrow"
      />
      <input className={styles.input} onFocus={onFocus} onKeyUp={handleKeyUp} />
    </div>
  );
};
