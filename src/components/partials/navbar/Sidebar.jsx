import React, {useRef} from "react";
import NavList from "./NavList";

export default function Sidebar({onClick}) {
  const labelRef = useRef(null);

  const handleNavListClick = () => {
    // Lakukan sesuatu ketika NavList diklik
    console.log("NavList clicked");
    // Klik elemen label menggunakan ref
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  const navLink = [
    {href: "/#home", label: "Home"},
    {href: "/#about", label: "About"},
    {href: "/#projects", label: "Projects"},
    {href: "/#contact", label: "Contact"},
  ]
  return (
    <div className="drawer-side">
      <label onClick={onClick} htmlFor="sidebar" aria-label="close sidebar" className="drawer-overlay" ref={labelRef}></label>
      <ul className="flex font-archivo items-center px-0 flex-col justify-center p-4 w-full sm:w-72 min-h-full bg-base-200 text-base-content border-e border-accent/10 relative">
        <label htmlFor="sidebar" className="absolute top-5 right-5 cursor-pointer sm:hidden block">
          <div className="w-8 h-8 translate-y-3">
            <span className="block border-b-2 border-accent h-1 w-8 origin-center duration-150 rotate-[45deg]"></span>
            <span className="block border-b-2 border-accent h-1 w-8 origin-center duration-150 -rotate-[45deg] -translate-y-1 -translate-x-[1px]"></span>
          </div>
        </label>
        {/* Sidebar content here */}
        {
          navLink.map((item) => (
            <NavList key={item.href} content={item.label} href={item.href} className={"after:hover:w-full"} onClick={handleNavListClick} />
          ))
        }
      </ul>
    </div>
  );
}
