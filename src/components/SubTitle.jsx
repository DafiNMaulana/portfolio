import React from "react";

export default function SubTitle({content, parentClassName, ref}) {
  return (
    <div className={parentClassName} ref={ref}>
      <h1 className="text-secondary-dark font-semibold">
        {content}
      </h1>
    </div>
  );
}
