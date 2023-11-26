import Link from "next/link";

// icon
import NavbarIcon from "./partials/navbar/NavbarIcon";
import Menu from "./partials/navbar/Menu";
import NavbarEnd from "./partials/navbar/NavbarEnd";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 container mx-auto py-5 border-b border-accent/20 px-3 fixed top-0 left-0 right-0 z-50">
      <NavbarIcon/>

      <Menu/>

      <NavbarEnd/>
    </div>
  );
}
