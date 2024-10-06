"use client";

import { useState } from "react";
import { List } from "./components/list/list";
import { useListData } from "./hooks/useListData";
import { Input } from "./components/input";
import styles from './style.module.scss'

export const MultiSelectDropDown = () => {
  const { listData, addToList, handleListItemSelect } = useListData();

  const [isListOpen, setIsListOpen] = useState(false);

  const handleInputFocus = () => setIsListOpen(true);

  const handleInputSubmit = (title: string) => {
    const isTitleValid = !!title;
    isTitleValid && addToList(title);
  };

  const handleListDismiss = () => setIsListOpen(false);

  return (
    <div className={styles.main}>
      <Input onFocus={handleInputFocus} onSubmit={handleInputSubmit} />
      <List
        isOpen={isListOpen}
        data={listData}
        onSelect={handleListItemSelect}
        onDismiss={handleListDismiss}
      />
    </div>
  );
};
