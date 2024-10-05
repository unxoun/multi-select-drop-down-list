import { ListItem } from "./listItem";
import { TListProps } from "../types";

export const List = ({ ref, data, onSelect }: TListProps) => {
  return (
    <div ref={ref}>
      {data.map((listItem) => (
        <ListItem data={listItem} onClick={onSelect} />
      ))}
    </div>
  );
};
