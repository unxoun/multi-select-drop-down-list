import { RefObject } from "react";

type THTMLDivElementRef = RefObject<HTMLDivElement>;

export type TListItemData = {
  title: string;
  iconAddress: string;
  iconAlt: string;
};

export type TListItemProps = {
  data: TListItemData;
  onSelect: (e: TListItemData) => void;
};

export type TListData = TListItemData[];

export type TListProps = {
  data: TListData;
  onSelect: (e: TListItemData) => void;
};

export type TuseOpenAndCloseListProps = {
  ref: THTMLDivElementRef;
};
