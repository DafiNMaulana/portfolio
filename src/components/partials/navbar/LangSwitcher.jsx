import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown} from "@fortawesome/free-solid-svg-icons";
import IndoFlag from "@/icons/IndoFlag";
import UkFlag from "@/icons/UkFlag";

export default function LangSwitcher() {
  return (
    <div className="dropdown dropdown-left dropdown-bottom hidden lg:flex">
      <label tabIndex={0} className="btn m-1 group">
        <FontAwesomeIcon icon={faCaretDown} className="group-active:translate-y-1" />
        <IndoFlag />
      </label>
      <ul tabIndex={0} className="dropdown-content flex flex-col gap-3 z-[1] p-2 bg-base-100 rounded-md w-52 border border-accent/40 translate-x-[5rem]">
        <li>
          <button className="w-full flex p-2 rounded-md gap-2 items-center" disabled>
            <IndoFlag />
            Indonesia
          </button>
        </li>
        <li>
          <button className="w-full flex p-2 rounded-md gap-2 items-center" disabled>
            <UkFlag />
            English (Soon)
          </button>
        </li>
      </ul>
    </div>
  );
}
