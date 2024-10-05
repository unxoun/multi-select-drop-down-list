import { TListItemProps } from "../types";
import Image from "next/image";

export const ListItem = ({
  data: { title, iconAddress, iconAlt },
  onClick,
}: TListItemProps) => {
  return (
    <div onClick={() => onClick({ title, iconAddress, iconAlt })}>
      <span>{title}</span>
      <Image src={iconAddress} width={20} height={20} alt={iconAlt} />
    </div>
  );
};
