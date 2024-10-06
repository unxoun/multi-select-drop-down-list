import styles from "./style.module.scss";
import { TListItemProps } from "../../types";
import Image from "next/image";
import CheckMarkSVG from "../../icons/check_mark.svg";

export const ListItem = ({
  data: { id, title, iconAddress, iconAlt, isSelected },
  onSelect,
}: TListItemProps) => {
  return (
    <div
      className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}
      onClick={() => onSelect(id)}
    >
      <div className={styles.leftSection}>
        <span className={styles.title}>{title}</span>
        <Image
          className={styles.icon}
          src={iconAddress}
          width={20}
          height={20}
          alt={iconAlt}
        />
      </div>
      {isSelected && (
        <Image src={CheckMarkSVG} width={20} height={20} alt="selected" />
      )}
    </div>
  );
};
