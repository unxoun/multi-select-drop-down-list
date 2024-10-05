import { ReactNode, RefObject } from "react";

type THTMLDivElementRef = RefObject<HTMLDivElement>;

export type TListItemData = {
  title: string;
  iconAddress: string;
  iconAlt: string;
};

export type TListItemProps = {
  data: TListItemData;
  onClick: (e: TListItemData) => void;
};

export type TListData = TListItemData[];

export type TListProps = {
  ref?: THTMLDivElementRef;
  data: TListData;
  onSelect: (e: TListItemData) => void;
};

export type TUseOpenAndCloseTheListProps = {
  ref: THTMLDivElementRef;
};
