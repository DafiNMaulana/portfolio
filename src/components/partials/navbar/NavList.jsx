import React from "react";
import Link from "next/link";

export default function NavList({content, href = "#", className, onClick}) {
  return (
    <li className="w-full">
      <Link
        onClick={onClick}
        href={href}
        className={`rounded-0 p-3 w-full block relative active:bg-transparent focus:bg-transparent text-xl text-accent after:duration-200 rounded-none px-10 after:w-0 after:border-b after:h-1 after:border-accent after:block ${className}`}
      >
        {content}
      </Link>
    </li>
  );
}
