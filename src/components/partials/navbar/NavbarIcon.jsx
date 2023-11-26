import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function NavbarIcon() {
  return (
    <div className="navbar-start">
      <Link
        href={"https://github.com/DafiNMaulana"}
        className="text-accent font-bold tracking-wider py-3 px-5 flex gap-2 items-center hover:bg-accent/10 rounded-md duration-200"
      >
        <FontAwesomeIcon icon={faGithub} size="2xl" />
        <span className="text-base sm:inline hidden">Dafi N Maulana</span>
        <span className="text-base inline sm:hidden">Dafi</span>
      </Link>
    </div>
  );
}
