import React from "react";

export default function Title({content, className, ref}) {
  return <h1 className={`text-accent font-bold text-3xl ${className}`}>{content}</h1>;
}
