"use client";

import { useEffect, useRef } from "react";

export const Test = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        alert("You clicked outside of me!");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      style={{
        background: "yellow",
        padding: "50px",
        width: "30%",
        margin: "100px",
      }}
    >
      Component
    </div>
  );
};
