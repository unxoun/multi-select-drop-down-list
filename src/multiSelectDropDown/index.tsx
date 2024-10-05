"use client";

import { useRef, useState } from "react";
import { useFilterListData } from "./hooks/useFilterListData";
import { List } from "./components/list";
import { useOpenAndCloseTheList } from "./hooks/useOpenAndCloseTheList";

export const MultiSelectDropDown = () => {
  const listRef = useRef<HTMLDivElement>(null);

  const { isListOpen, openList } = useOpenAndCloseTheList({
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
