import { useEffect, useState } from "react";
import { TDivRef } from "../types";

export const useListToggle = (containerRef: TDivRef) => {
  const [isListOpen, setIsListOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node | null)
      )
        setIsListOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef]);

  const openList = () => setIsListOpen(true);

  return {
    isListOpen,
    openList,
  };
};
