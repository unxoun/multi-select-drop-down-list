import { ListItem } from "../listItem";
import { TListProps } from "../../types";
import { forwardRef } from "react";

const List = forwardRef<HTMLDivElement, TListProps>(
  ({ data, onSelect }, ref) => {
    return (
      <div ref={ref}>
        {data.map((listItemData, index) => (
          <ListItem key={index} data={listItemData} onSelect={onSelect} />
        ))}
      </div>
    );
  }
);

List.displayName = "List";
export { List };
