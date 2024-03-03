import Link from "next/link";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <p> next js</p>
        <ul className={styles.links}>
          <Link href="/">
            <li> Home </li>
          </Link>
          <Link href="/about">
            <li> About</li>
          </Link>
          <Link href="/contact">
            <li> Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
