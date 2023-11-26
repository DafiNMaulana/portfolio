import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BtnListFilter({title, icon, onClick}) {
  return (
    <li>
      <button className="hover:bg-accent/10 p-3 rounded-md duration-100" onClick={onClick}> <FontAwesomeIcon icon={icon} /> {title}</button>
    </li>
  );
}
