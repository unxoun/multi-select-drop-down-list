import { TListItemProps } from "../../types";
import Image from "next/image";

export const ListItem = ({
  data: { id, title, iconAddress, iconAlt, isSelected },
  onSelect,
}: TListItemProps) => {
  return (
    <div onClick={() => onSelect(id)}>
      <span>{title}</span>
      <Image src={iconAddress} width={20} height={20} alt={iconAlt} />
      {isSelected && <span>*</span>}
    </div>
  );
};
