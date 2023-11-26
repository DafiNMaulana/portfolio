"use client";
import {useState} from "react";
import LangSwitcher from "./LangSwitcher";
import Sidebar from "./Sidebar";

export default function NavbarEnd() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    if (isOpen) setIsOpen(false);
    else setIsOpen(true);
  };
  return (
    <div className="navbar-end">
      <LangSwitcher />
      <div className="drawer relative z-[9999] block lg:hidden">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label onClick={toggle} htmlFor="sidebar" className={`flex lg:hidden flex-col gap-2 w-8 ml-auto pr-12 cursor-pointer`}>
            <span className={`border-b-2 border-accent h-1 w-8 origin-center duration-150`}></span>
            <span className={`border-b-2 border-accent h-1 w-8 origin-left duration-150 `}></span>
          </label>
        </div>
        <Sidebar onClick={toggle} />
      </div>
    </div>
  );
}
