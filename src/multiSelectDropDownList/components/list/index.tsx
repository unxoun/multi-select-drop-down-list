import styles from "./style.module.scss";
import { ListItem } from "../listItem";
import { TListProps } from "../../types";
import { EmptyList } from "../emptyList";

export const List = ({ isOpen, data, onSelect }: TListProps) => {
  return (
    isOpen && (
      <div className={styles.wrapper}>
        <div className={styles.list}>
          {data.length ? (
            data.map((itemData) => (
              <ListItem key={itemData.id} data={itemData} onSelect={onSelect} />
            ))
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    )
  );
};
