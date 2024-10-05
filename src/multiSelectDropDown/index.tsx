"use client";

import { useRef, useState } from "react";
import { useFilterListData } from "./hooks/useFilterListData";
import { List } from "./components/list/list";
import { useOpenAndCloseList } from "./hooks/useOpenAndCloseList";

export const MultiSelectDropDown = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const { isListOpen, openList } = useOpenAndCloseList({
    ref: listRef,
  });

  const [inputValue, setInputValue] = useState("");

  const { listData } = useFilterListData();

  const handleInputFocus = () => openList();

  const handleListItemSelect = () => {};

  return (
    <div>
      <input onFocus={handleInputFocus} />
      {isListOpen && (
        <List ref={listRef} data={listData} onSelect={handleListItemSelect} />
      )}
    </div>
  );
};
