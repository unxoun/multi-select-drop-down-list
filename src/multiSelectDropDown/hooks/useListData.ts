import { useState } from "react";
import {
  TaddToList,
  TListData,
  TListItemData,
  TOnListItemSelect,
} from "../types";
import { createListItem } from "../utils/functions";

export const useListData = () => {
  const [listData, setListData] = useState<TListData>([]);

  const addToList: TaddToList = (itemTitle) => {
    const newItem = createListItem(itemTitle);
    setListData([newItem, ...listData]);
  };

  const handleListItemSelect: TOnListItemSelect = (id) => {
    const newListData = structuredClone(listData);

    const selectedItemIndex = newListData.findIndex(
      (listItem) => listItem.id === id
    );

    const selectedItem = newListData[selectedItemIndex];

    const updatedIsSelected = !selectedItem.isSelected;

    const updatedItem: TListItemData = {
      ...selectedItem,
      isSelected: updatedIsSelected,
    };

    newListData.splice(selectedItemIndex, 1, updatedItem);

    setListData(newListData);
  };

  return {
    listData,
    addToList,
    handleListItemSelect,
  };
};
