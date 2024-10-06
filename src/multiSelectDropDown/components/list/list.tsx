import styles from './style.module.scss'
import { ListItem } from "../listItem/listItem";
import { TListProps } from "../../types";
import { EmptyList } from "../emptyList";
import { useEffect, useRef } from "react";

export const List = ({ isOpen, onDismiss, data, onSelect }: TListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TO DO: remove this
    function handleOutsideClick(e: MouseEvent) {
      listRef.current &&
        !listRef.current.contains(e.target as Node | null) &&
        onDismiss();
    }

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [listRef]);

  return (
    isOpen && (
      <div ref={listRef} className={styles.list}>
        {data.length ? (
          data.map((itemData) => (
            <ListItem key={itemData.id} data={itemData} onSelect={onSelect} />
          ))
        ) : (
          <EmptyList />
        )}
      </div>
    )
  );
};
