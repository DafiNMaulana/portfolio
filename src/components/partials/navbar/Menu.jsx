"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";

export default function Menu() {

  const menuItems = [
    {href: "/#home", label: "Home"},
    {href: "/#about", label: "About"},
    {href: "/#projects", label: "Projects"},
    {href: "/#contact", label: "Contact"},
  ];

  return (
    <div className="navbar-center hidden lg:flex gap-10 text-sm font-semibold translate-y-[3px] text-accent/70">
      {menuItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
