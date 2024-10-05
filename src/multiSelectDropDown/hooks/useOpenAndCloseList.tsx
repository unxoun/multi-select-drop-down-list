import { useEffect, useState } from "react";
import { TuseOpenAndCloseListProps } from "../types";

export const useOpenAndCloseList = ({ ref }: TuseOpenAndCloseListProps) => {
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      console.log("click");
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        setIsListOpen(false);
        console.log("me");
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
