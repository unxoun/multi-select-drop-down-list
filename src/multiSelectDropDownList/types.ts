import { FocusEventHandler, RefObject } from "react";

export type TInputOnFocus = FocusEventHandler<HTMLInputElement>;

export type TDivRef = RefObject<HTMLDivElement>;

export type TListItemData = {
  id: string;
  title: string;
  iconAddress: string;
  iconAlt: string;
  isSelected: boolean;
};

export type TOnListItemSelect = (id: string) => void;

export type TListItemProps = {
  data: TListItemData;
  onSelect: TOnListItemSelect;
};

export type TListData = TListItemData[];

export type TListProps = {
  isOpen: boolean;
  data: TListData;
  onSelect: TOnListItemSelect;
};

export type TInputProps = {
  isOpen: boolean;
  onFocus: TInputOnFocus;
  onSubmit: (value: string) => void;
};

export type TCreateListItem = (title: string) => TListItemData;

export type TaddToList = (title: string) => void;
