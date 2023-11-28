import React from "react";
import Link from "next/link";
export default function BacOutlineAccent({href, content, className}) {
  return (
    <Link href={href} className={`btn btn-outline capitalize px-8 hover:bg-accent hover:text-base-100 text-base ${className}`}>
      {content}
    </Link>
  );
}
