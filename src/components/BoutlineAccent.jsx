import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoutlineAccent({
  className,
  content,
  icon,
  faClassName,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-outline sm:text-lg text-sm tracking-normal capitalize hover:bg-accent hover:text-base-100 text-accent ${className}`}
    >
      {content && content}
      {icon && <FontAwesomeIcon icon={icon} className={faClassName} />}
    </button>
  );
}
