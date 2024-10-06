import { TCreateListItem } from "../types";
import { ICON_ADDRESS } from "./staticData";

export const createId = () => Date.now().toString();

export const createListItem: TCreateListItem = (title) => {
  const id = createId();
  const iconAddress = ICON_ADDRESS;
  const iconAlt = title;
  const isSelected = false;

  const listItem = {
    id,
    title,
    iconAddress,
    iconAlt,
    isSelected,
  };

  return listItem;
};
