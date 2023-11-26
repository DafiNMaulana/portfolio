import React from "react";
import Link from "next/link";
export default function BacOutlineAccent({href, content, className}) {
  return (
    <Link href={href} className={`btn btn-outline capitalize px-8 hover:bg-accent text-base ${className}`}>
      {content}
    </Link>
  );
}
