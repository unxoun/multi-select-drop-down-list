import styles from "./style.module.scss";
import Image from "next/image";
import checkMarkSvg from "../../icons/check_mark.svg";
import { TListItemProps } from "../../types";

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
      <div className={styles.selectedIcon}>
        {isSelected && (
          <Image src={checkMarkSvg} width={18} height={18} alt="selected" />
        )}
      </div>
    </div>
  );
};
