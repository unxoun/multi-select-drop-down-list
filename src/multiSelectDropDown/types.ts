import { FocusEventHandler, RefObject, KeyboardEvent } from "react";

type TInputOnFocus = FocusEventHandler<HTMLInputElement>;

export type TDivRef = RefObject<HTMLDivElement>;

export type TListItemData = {
  id: string;
  title: string;
  iconAddress: string;
  iconAlt: string;
  isSelected: boolean;
};

export type TOnListItemSelect = (id: TListItemData["id"]) => void;

export type TListItemProps = {
  data: TListItemData;
  onSelect: TOnListItemSelect;
};

export type TListData = TListItemData[];

export type TListProps = {
  isOpen: boolean;
  data: TListData;
  onSelect: TOnListItemSelect;
  onDismiss: VoidFunction;
};

export type TInputProps = {
  onFocus: TInputOnFocus;
  onSubmit: (e: string) => void;
};

export type TUseOpenAndCloseListProps = {
  listRef: TDivRef;
  handleListClose: VoidFunction;
};

export type TCreateListItem = (title: string) => TListItemData;

export type TaddToList = (title: string) => void;
