import Link from "next/link";

export default function BacPrimary({content, className, href = '#'}) {
  return (
    <Link href={href} className={`btn btn-primary ${className}`}>
      {content}
    </Link>
  )
}
