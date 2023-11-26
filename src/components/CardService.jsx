import React from "react";
import BacOutlineAccent from "./BacOutlineAccent";

export default function CardService({ children, className, projectTo }) {
  return (
    <div
      className={`w-[294px] flex flex-col gap-5 border border-[#4E4E4E] p-5 rounded-md ${className}`}
    >
      {children}
      <div className="text-end">
        <BacOutlineAccent href={projectTo} content={"Lihat Project"} className="mt-5" />
      </div>
    </div>
  );
}
