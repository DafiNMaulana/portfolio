import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tag({href, title}) {
  return (
    <span
      className="rounded-full capitalize border border-accent/30 px-3 py-2 text-xs font-medium text-accent/30 flex flex-row flex-nowrap gap-x-2 items-center"
    >
      <span>{title}</span>
    </span>
  );
}
