"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./NavLink.module.css";

/**
 * Component for rendering a navigation link.
 *
 * @param {string} href - The URL of the link.
 * @param {ReactNode} children - The content to display within the link.
 * @returns {ReactElement}
 */
const NavLink = ({ href, children }) => {
  const path = usePathname();
  const className = path.startsWith(href)
    ? `${classes.link} ${classes.active}`
    : classes.link;

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default NavLink;
