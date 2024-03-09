import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";

/**
 * Represents the links displayed in the navigation bar.
 * @type {Array<Object>}
 * @property {string} label - The label displayed for the link.
 * @property {string} route - The route that the link points to.
 */
const navbarLinks = [
  { label: "Browse Meals", route: "/meals" },
  { label: "Foodies Community", route: "/community" },
];

/**
 * Represents the main header component of the application.
 *
 * Used by: {@link RootLayout}
 * @returns {JSX.Element}
 */
const MainHeader = () => (
  <header className={classes.header}>
    <Link className={classes.logo} href="/">
      <img src={logoImg.src} alt="A plate with food on it" />
      NextLevel Food
    </Link>
    <nav className={classes.nav}>
      <ul>
        {navbarLinks.map(({ label, route }) => (
          <li key={route}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default MainHeader;
