import Link from "next/link";

export default function BacAccent({url, title, className}) {
  return (
    <Link href={url} target="_blank" className={`btn btn-accent capitalize font-semibold rounded-md ${className}`}>
      {title}
    </Link>
  );
}
