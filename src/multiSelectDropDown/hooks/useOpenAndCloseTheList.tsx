import { useEffect, useRef, useState } from "react";
import { TUseOpenAndCloseTheListProps } from "../types";

export const useOpenAndCloseTheList = ({ref}: TUseOpenAndCloseTheListProps) => {

  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        setIsListOpen(false);
        console.log('me')
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [ref]);

  const openList = () => setIsListOpen(true);

  return {
    openList,
    isListOpen,
  };
};
