"use client";

import styles from "./style.module.scss";
import { useRef } from "react";
import { List } from "./components/list";
import { useListData } from "./hooks/useListData";
import { Input } from "./components/input";
import { useListToggle } from "./hooks/useListToggle";

export const MultiSelectDropDownList = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { isListOpen, openList } = useListToggle(containerRef);

  const { listData, addToList, handleListItemSelect } = useListData();

  const handleInputFocus = () => openList();

  const handleInputSubmit = (inputValue: string) => {
    const isInputValueValid = inputValue !== "";
    if (isInputValueValid) addToList(inputValue);
  };

  return (
    <div ref={containerRef} className={styles.container}>
      <Input isOpen={isListOpen} onFocus={handleInputFocus} onSubmit={handleInputSubmit} />
      <List
        isOpen={isListOpen}
        data={listData}
        onSelect={handleListItemSelect}
      />
    </div>
  );
};
